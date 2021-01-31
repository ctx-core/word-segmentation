export interface aspell_queue_obj_type {
    word: string;
    resolve(word_a1: null | string[]): void;
    reject(error: Error): void;
}
