import type { Aspell } from './Aspell'
import { _word_reduction_compound_word_a1 } from './_word_reduction_compound_word_a1'
export async function _compound_word_a1(word:string, compound_aspell:Aspell) {
	return _word_reduction_compound_word_a1(word, compound_aspell)
}
