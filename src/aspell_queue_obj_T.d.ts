export interface aspell_queue_obj_T {
    word: string;
    resolve(word_a: null | string[]): void;
    reject(error: Error): void;
}
