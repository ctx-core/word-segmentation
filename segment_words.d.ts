import type { words_segment_opts_type } from './words_segment_opts_type';
export declare function segment_words(phrases: any, { top_aspell, compound_aspell, }?: words_segment_opts_type): Promise<any>;
export declare const segment__words: typeof segment_words;