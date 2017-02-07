/// <reference types="node" />
import { BlobService } from 'azure-storage';
import * as stream from 'stream';
export declare function createBlobService(): {
    appendText: (container: string, blob: string, content: string) => Promise<BlobService.BlobResult>;
    createBlockBlobFromText: (arg: string, arg2: string, arg3: string | Buffer) => Promise<BlobService.BlobResult>;
    createBlockBlobFromStream: (arg: string, arg2: string, arg3: stream.Readable, arg4: number) => Promise<{}>;
    getBlobToText: (arg: string, arg2: string) => Promise<string>;
    appendBlockFromText: (arg: string, arg2: string, arg3: string | Buffer) => Promise<BlobService.BlobResult>;
    createAppendBlobFromText: (arg: string, arg2: string, arg3: string | Buffer) => Promise<BlobService.BlobResult>;
    getBlobProperties: (arg: string, arg2: string) => Promise<BlobService.BlobResult>;
};
