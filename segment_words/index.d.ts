import type { words_segment_opts_T } from '../_types/index.js'
export declare function segment_words(
	phrases:string,
	{ top_aspell, compound_aspell, }?:words_segment_opts_T
):Promise<string>
export { segment_words as segment__words }
