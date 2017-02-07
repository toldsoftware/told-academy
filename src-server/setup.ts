import * as T from '@told/azure-functions-server/lib/src';
import * as R from './resource';
import { Settings } from './shared/settings';
import { createBlobService, BlobUtilities } from 'azure-storage';

export async function main(context: T.RawContext, request: T.Request<{}, any>) {

    // One-time setup
    let report = '';

    let log = (message: string) => {
        report += `${message}\n`;
        context.log(message);
    };

    // Ensure containers exists
    let service = createBlobService();
    let tasks: Promise<{}>[] = [];

    log(`Creating Tasks START`);

    for (let k in Settings) {
        if (k.indexOf('containerName') !== 0) { continue; }
        let containerName = (Settings as any)[k];
        let accessType = k.indexOf('public') > 0 ? BlobUtilities.BlobContainerPublicAccessType.BLOB : BlobUtilities.BlobContainerPublicAccessType.OFF;

        let p = new Promise((resolve, reject) => {
            log(`Container Setup START: '${containerName}'`);
            service.createContainerIfNotExists(containerName, { publicAccessLevel: accessType }, (error, result, response) => {
                if (error) {
                    context.done(error, null);
                    reject('FAILED Container Setup: ' + containerName + ' :: ' + error);
                    return;
                }

                log(`Container Setup END: '${containerName}'`);
                resolve();
            });
        });
        tasks.push(p);
    }
    log(`Creating Tasks END`);
    log(`Running Tasks START tasks.length=${tasks.length}`);
    await Promise.all(tasks);
    log(`Running Tasks END`);

    context.done(null, {
        status: 200,
        headers: {
            'Content-Type': 'text/plain'
        },
        body: 'SUCCESS:\n' + report
    });

}