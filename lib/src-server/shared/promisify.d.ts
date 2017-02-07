export declare type Nodeback<T> = (err: any, result: T) => void;
export declare function promisify<T>(f: (cb: Nodeback<T>) => void, thisContext?: any): () => Promise<T>;
export declare function promisify<A, T>(f: (arg: A, cb: Nodeback<T>) => void, thisContext?: any): (arg: A) => Promise<T>;
export declare function promisify<A, A2, T>(f: (arg: A, arg2: A2, cb: Nodeback<T>) => void, thisContext?: any): (arg: A, arg2: A2) => Promise<T>;
export declare function promisify<A, A2, A3, T>(f: (arg: A, arg2: A2, arg3: A3, cb: Nodeback<T>) => void, thisContext?: any): (arg: A, arg2: A2, arg3: A3) => Promise<T>;
export declare function promisify<A, A2, A3, A4, T>(f: (arg: A, arg2: A2, arg3: A3, arg4: A4, cb: Nodeback<T>) => void, thisContext?: any): (arg: A, arg2: A2, arg3: A3, arg4: A4) => Promise<T>;
