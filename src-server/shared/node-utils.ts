import * as http from 'http';
import * as https from 'https';
import * as url from 'url';
import * as stream from 'stream';

// const http = require('http') as NodeHttpModule;
// const https = require('https') as NodeHttpModule;
// const url = require('url') as NodeUrlModule;

export interface HttpResponse<T> {
    requestUrl: string;

    body: T;
    isSuccess: boolean;
    hasFailedToParseJson: boolean;
    statusCode: number;
    statusMessage: string;
    responseRawHeaders: string[];
}

export function httpRequest<T>(requestUrl: string, method = 'GET'): Promise<HttpResponse<T>> {
    return httpRequest_inner(requestUrl, method, true);
}

export function httpRequest_raw(requestUrl: string, method = 'GET'): Promise<HttpResponse<string>> {
    return httpRequest_inner<string>(requestUrl, method, false);
}

function httpRequest_inner<T>(requestUrl: string, method: string, shouldParseJson: boolean): Promise<HttpResponse<T>> {
    return new Promise<HttpResponse<T>>((resolve, reject) => {

        let urlObj = url.parse(requestUrl);
        let requestOptions = urlObj as any as http.RequestOptions;
        requestOptions.method = method;

        let httpClient = (urlObj.protocol.match(/https/) ? https : http) as typeof http;

        httpClient.request(requestOptions, res => {

            let body = '';
            res.on('data', d => {
                body += d;
            });

            res.on('end', () => {

                let statusCode = res.statusCode;
                let isSuccess = res.statusCode >= 200 && res.statusCode < 300;
                let statusMessage = res.statusMessage;
                let hasFailedToParseJson = false;

                let bodyObj: T = null;

                if (shouldParseJson) {
                    try {
                        bodyObj = JSON.parse(body);
                    } catch (err) {
                        bodyObj = body as any;
                        isSuccess = false;
                        hasFailedToParseJson = true;
                    }
                } else {
                    bodyObj = body as any as T;
                }

                let responseObj: HttpResponse<T> = {
                    requestUrl,
                    body: bodyObj,
                    isSuccess,
                    hasFailedToParseJson,
                    statusCode,
                    statusMessage,
                    responseRawHeaders: res.rawHeaders
                };
                resolve(responseObj);

            });

        }).end();
    });
}

export function httpRequest_stream(requestUrl: string, method: string) {
    return new Promise<{ stream: stream.Readable, length: number }>((resolve, reject) => {

        let urlObj = url.parse(requestUrl);
        let requestOptions = urlObj as any as http.RequestOptions;
        requestOptions.method = method;

        let httpClient = (urlObj.protocol.match(/https/) ? https : http) as typeof http;

        httpClient.request(requestOptions, res => {
            resolve({ stream: res, length: res.headers['content-length'] });
        }).end();
    });
}