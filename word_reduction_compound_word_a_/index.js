/// <reference types="../Aspell/index.d.ts" />
import { map, reduce, reject as a_reject, sort } from 'ctx-core/array'
import { backward_word_reduction_compound_word_aa_ } from '../backward_word_reduction_compound_word_aa_/index.js'
/**
 * @param {string}word
 * @param {Aspell}compound_aspell
 * @returns {Promise<string[]>}
 */
export async function word_reduction_compound_word_a_(
	word, compound_aspell
) {
	const compound_word_aa = await backward_word_reduction_compound_word_aa_(word, compound_aspell)
	const cleaned_compound_word_aa =
		map(compound_word_aa, compound_word_a=>{
			const cleaned_compound_word_a = a_reject(compound_word_a, (compound_word)=>compound_word.toLowerCase() === 'and')
			return [
				compound_word_a,
				cleaned_compound_word_a
			]
		})
	const cleaned_sorted_word_aaa =
		sort(cleaned_compound_word_aa, (l, r)=>{
			const cleaned_l_compound_word_a = l[1]
			const cleaned_r_compound_word_a = r[1]
			if (cleaned_l_compound_word_a.length < cleaned_r_compound_word_a.length) {
				return -1
			} else if (l.length > r.length) {
				return 1
			}
			const lt_3_sum_ = (lt_3_sum, word)=>{
				return lt_3_sum + Math.max(3 - word.length, 0)
			}
			const lt_3_l_sum = reduce(cleaned_l_compound_word_a, lt_3_sum_, 0)
			const lt_3_r_sum = reduce(cleaned_r_compound_word_a, lt_3_sum_, 0)
			if (lt_3_l_sum < lt_3_r_sum) {
				return -1
			}
			if (lt_3_l_sum > lt_3_r_sum) {
				return 1
			}
			return 0
		})
	const [compound_word_a] = cleaned_sorted_word_aaa[0]
	return compound_word_a
}
