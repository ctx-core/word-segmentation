import { word_reduction_compound_word_a_ } from '../word_reduction_compound_word_a_/index.js'
/**
 * @param word{string}
 * @param compound_aspell{import('../Aspell').Aspell}
 * @returns {Promise<string[]>}
 */
export async function compound_word_a_(word, compound_aspell) {
	return word_reduction_compound_word_a_(word, compound_aspell)
}
