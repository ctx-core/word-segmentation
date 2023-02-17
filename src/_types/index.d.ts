import type { CompoundAspell } from '../CompoundAspell'
import type { top_Aspell } from '../top_Aspell'
export interface aspell_queue_obj_T {
	word:string
	resolve(word_a:null|string[]):void
	reject(error:Error):void
}
export interface words_segment_opts_T {
	top_aspell:top_Aspell
	compound_aspell:CompoundAspell
}
