import { createBlobService as createBlobServiceInner, BlobService, BlobUtilities, services } from 'azure-storage';
import * as stream from 'stream';

import { promisify } from './promisify';

export function createBlobService() {
    let service = createBlobServiceInner();
    let promisified = promisifyBlobService(service);

    let extended = {
        ...promisified,
        appendText: (container: string, blob: string, content: string) => appendText(promisified, container, blob, content),
        doesBlobExist: (container: string, blob: string) => doesBlobExist(promisified, container, blob)
    };

    return extended;
}

function promisifyBlobService(service: BlobService) {
    if (service == null) { return null; }
    return {
        createBlockBlobFromText: promisify(service.createBlockBlobFromText, service),
        createBlockBlobFromStream: promisify(service.createBlockBlobFromStream, service),
        getBlobToText: promisify(service.getBlobToText, service),
        appendBlockFromText: promisify(service.appendBlockFromText, service),
        createAppendBlobFromText: promisify(service.createAppendBlobFromText, service),
        getBlobProperties: promisify<string, string, BlobService.BlobResult>(service.getBlobProperties, service),
    };
}

let example = promisifyBlobService(null);
type BlobServicePromisified = typeof example;

async function doesBlobExist(service: BlobServicePromisified, container: string, blob: string) {
    let exists = false;
    try {
        let blobProps = await service.getBlobProperties(container, blob);
        exists = blobProps.exists;
    }
    catch (err2) {
    }
    return exists;
}

async function appendText(service: BlobServicePromisified, container: string, blob: string, content: string, shouldIncrementIfFull = true) {
    try {
        return await service.appendBlockFromText(container, blob, content);
    } catch (err) {
        // Check for blob

        if (!await doesBlobExist(service, container, blob)) {
            return await service.createAppendBlobFromText(container, blob, content);
        }

        // // Appends too many?
        // if (blobProps.committedBlockCount >= 50000) {

        // }
    }
    throw 'Failed to appendText to blob: ' + container + '/' + blob;
}