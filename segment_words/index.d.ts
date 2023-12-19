import type { segment_words_config_T } from '../_types/index.js'
export declare function segment_words(
	phrases:string,
	{ top_aspell, compound_aspell, }?:segment_words_config_T
):Promise<string>
export { segment_words as segment__words }
