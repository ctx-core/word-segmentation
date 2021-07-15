import type { Aspell } from './Aspell.js'
import { word_reduction_compound_word_a_ } from './word_reduction_compound_word_a_.js'
export async function compound_word_a_(word:string, compound_aspell:Aspell) {
	return word_reduction_compound_word_a_(word, compound_aspell)
}
