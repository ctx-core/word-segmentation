import type { words_segment_opts_T } from './words_segment_opts_T';
export declare function segment_words(phrases: string, { top_aspell, compound_aspell, }?: words_segment_opts_T): Promise<string>;
export { segment_words as segment__words };
