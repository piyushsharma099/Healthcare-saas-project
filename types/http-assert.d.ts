declare module 'http-assert' {
    // Add necessary type declarations here
    export function assert(condition: any, status: number, msg?: string, opts?: {}): void;
    export function assert(condition: any, status: number, opts?: {}): void;
}
