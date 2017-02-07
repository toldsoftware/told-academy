export type Nodeback<T> = (err: any, result: T) => void;

// From: https://github.com/notenoughneon/typed-promisify/blob/master/index.ts
export function promisify<T>(f: (cb: Nodeback<T>) => void, thisContext?: any): () => Promise<T>;
export function promisify<A, T>(f: (arg: A, cb: Nodeback<T>) => void, thisContext?: any): (arg: A) => Promise<T>;
export function promisify<A, A2, T>(f: (arg: A, arg2: A2, cb: Nodeback<T>) => void, thisContext?: any): (arg: A, arg2: A2) => Promise<T>;
export function promisify<A, A2, A3, T>(f: (arg: A, arg2: A2, arg3: A3, cb: Nodeback<T>) => void, thisContext?: any): (arg: A, arg2: A2, arg3: A3) => Promise<T>;
export function promisify<A, A2, A3, A4, T>(f: (arg: A, arg2: A2, arg3: A3, arg4: A4, cb: Nodeback<T>) => void, thisContext?: any): (arg: A, arg2: A2, arg3: A3, arg4: A4) => Promise<T>;
export function promisify(f: any, thisContext: any = null) {
    return function () {
        let args = Array.prototype.slice.call(arguments);
        return new Promise((resolve, reject) => {
            args.push((err: any, result: any) => err !== null ? reject(err) : resolve(result));
            f.apply(thisContext, args);
        });
    };
}