import type { CompoundAspell } from '../CompoundAspell/index.js'
import type { top_Aspell } from '../top_Aspell/index.js'
export interface aspell_queue_obj_T {
	word:string
	resolve(word_a:null|string[]):void
	reject(error:Error):void
}
export interface segment_words_config_T {
	top_aspell:top_Aspell
	compound_aspell:CompoundAspell
}
