import { httpRequest_stream } from './shared/node-utils';

import * as T from '@told/azure-functions-server/lib/src';

import { createBlobService } from './shared/blob-utils';


export interface Request extends T.Request<{ word: string, imageUrl: string }, {}> { }

export interface ResponseData {
    ok: boolean;
}

export interface GetBlobResponseBody extends T.ResponseBody<ResponseData> { }

export async function main(context: T.Context<ResponseData>, request: Request) {
    context.log('START',
        'request.query', request.query
    );

    let word = request.query.word;
    let imageUrl = request.query.imageUrl;

    let containerName = 'word-pictures';
    let blobBaseName = request.query.word;

    // Uses env.AZURE_STORAGE_CONNECTION_STRING
    let service = createBlobService();

    // Save usage into append blob
    let appendBlobName = blobBaseName + '/usage.append.txt';
    let result = await service.appendText(containerName, appendBlobName, imageUrl);
    context.log('Saved Usage',
        'appendBlobName', appendBlobName,
        'committedBlockCount', result.committedBlockCount,
    );

    // Check if image copy exits
    let imageBlobName = blobBaseName + '/image/' + imageUrl;
    let props = await service.getBlobProperties(containerName, imageBlobName);
    if (!props.exists) {
        context.log('Copy Image START',
            'imageBlobName', imageBlobName,
        );

        // Copy Image to Blob
        let response = await httpRequest_stream(imageUrl, 'GET');

        context.log('Downloaded Image',
            'response.length', response.length,
        );

        await service.createBlockBlobFromStream(containerName, imageBlobName, response.stream, response.length);

        context.log('Copy Image END',
            'imageBlobName', imageBlobName,
        );
    }

    context.done(null, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
        body: {
            ok: true,
        }
    });

    context.log('END');
}