import { map, reduce, reject as reject__a1, sort } from '@ctx-core/array'
import { _backward_word_reduction_compound_word_a2 } from './_backward_word_reduction_compound_word_a2'
export async function _word_reduction_compound_word_a1(word, compound_aspell):Promise<string[]> {
	const compound_word_a2 = await _backward_word_reduction_compound_word_a2(word, compound_aspell)
	const cleaned_compound_word_a3 =
		map<string[], string[][]>(compound_word_a2, compound_word_a1=>{
			const compound_word_a1__cleaned =
				reject__a1(compound_word_a1,
					(compound_word:string)=>
						compound_word.toLowerCase() === 'and'
				)
			return [compound_word_a1, compound_word_a1__cleaned] as string[][]
		})
	const cleaned_sorted_word_a3 =
		sort(cleaned_compound_word_a3, (l, r)=>{
			const cleaned_l_compound_word_a1 = l[1]
			const cleaned_r_compound_word_a1 = r[1]
			if (cleaned_l_compound_word_a1.length < cleaned_r_compound_word_a1.length) {
				return -1
			} else if (l.length > r.length) {
				return 1
			}
			const _sum__lt__3 = (sum__lt__3, word)=>{
				return sum__lt__3 + Math.max(3 - word.length, 0)
			}
			const lt_3_l_sum = reduce(cleaned_l_compound_word_a1, _sum__lt__3, 0)
			const lt_3_r_sum = reduce(cleaned_r_compound_word_a1, _sum__lt__3, 0)
			if (lt_3_l_sum < lt_3_r_sum) {
				return -1
			}
			if (lt_3_l_sum > lt_3_r_sum) {
				return 1
			}
			return 0
		}) as string[][][]
	const [compound_word_a1] = cleaned_sorted_word_a3[0]
	return compound_word_a1
}
