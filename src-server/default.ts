import { main as main_inner } from '@told/azure-functions-server/lib/src-server/resource';

export async function main(context: any, request: any) {
    // request.query.name = 'index.html';
    request.query.name = 'word-to-picture.html';
    return await main_inner(context, request, 0);
}
