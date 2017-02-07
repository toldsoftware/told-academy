/// <reference types="node" />
import * as stream from 'stream';
export interface HttpResponse<T> {
    requestUrl: string;
    body: T;
    isSuccess: boolean;
    hasFailedToParseJson: boolean;
    statusCode: number;
    statusMessage: string;
    responseRawHeaders: string[];
}
export declare function httpRequest<T>(requestUrl: string, method?: string): Promise<HttpResponse<T>>;
export declare function httpRequest_raw(requestUrl: string, method?: string): Promise<HttpResponse<string>>;
export declare function httpRequest_stream(requestUrl: string, method: string): Promise<{
    stream: stream.Readable;
    length: number;
}>;
