import * as T from '@told/azure-functions-server/lib/src';
export interface Request extends T.Request<{
    word: string;
    imageUrl: string;
}, {}> {
}
export interface ResponseData {
    ok: boolean;
}
export interface GetBlobResponseBody extends T.ResponseBody<ResponseData> {
}
export declare function main(context: T.Context<ResponseData>, request: Request): Promise<void>;
