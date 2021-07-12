import { each, sort } from '@ctx-core/array'
import type { Aspell } from './Aspell'
export async function backward_word_reduction_compound_word_aa_(
	word:string, compound_aspell:Aspell
):Promise<string[][]> {
	if (!word) return []
	const word_a = await compound_aspell.run(word)
	if (word_a) {
		return [word_a]
	}
	const { length } = word
	const valid_wordset_aa:string[][] = []
	const begin_subword_aa:string[][] = []
	for (let idx = length - 1; idx >= 0; idx -= 1) {
		let candidate_begin_idx = 0
		let candidate_end_idx = idx + 1
		let begin_subword = word.slice(candidate_begin_idx, candidate_end_idx)
		const begin_subword_a = await compound_aspell.run(begin_subword)
		if (!begin_subword_a) continue
		begin_subword_aa.push(begin_subword_a)
	}
	const starter_word_a = ['the', 'for']
	const sort_begin_subword_aa = sort(begin_subword_aa, (l:string[], r:string[])=>{
			return (
				(l.length === 1 && starter_word_a.indexOf(l[0].toLowerCase()) > -1)
				? -1
				: (r.length === 1 && starter_word_a.indexOf(r[0].toLowerCase()) > -1)
					? 1
					//region plural word or next word begins with s?
					: (
							l[0].slice(l[0].length - 1).toLowerCase() === 's'
							&& (l[0].length === (r[0].length + 1))
						) ? 1
							: (
									r[0].slice(r[0].length - 1).toLowerCase() === 's'
									&& (r[0].length === (l[0].length + 1))
								)
								? -1
							//endregion
								: l[0].length > r[0].length
									? -1
									: l[0].length < r[0].length
										? 1
										: l[0] > r[0]
											? -1
											: 1
			)
		}
	)
	for (let idx = 0; idx < sort_begin_subword_aa.length; idx += 1) {
		const subword_a = begin_subword_aa[idx]
		const [subword] = subword_a
		const rest_idx = subword.length
		const subword__rest = word.slice(rest_idx)
		const subword_rest_a = await compound_aspell.run(subword__rest)
		if (subword_rest_a) {
			valid_wordset_aa.push(subword_a.concat(...subword_rest_a))
			break
		}
		const rest_subword_aa =
			await backward_word_reduction_compound_word_aa_(
				subword__rest,
				compound_aspell)
		each(rest_subword_aa, rest_word_a=>
			valid_wordset_aa.push(subword_a.concat(...rest_word_a))
		)
		if (rest_subword_aa.length) {
			if (starter_word_a.indexOf(subword.toLowerCase()) > -1) {
				continue
			}
			const next_subword_a = sort_begin_subword_aa[idx + 1]
			const next_subword = next_subword_a && next_subword_a[0]
			if (
				next_subword
				&& (
					(
						next_subword.slice(next_subword.length - 1) === 's'
						&& (subword.length + 1) === next_subword.length
					)
					|| subword.length === (next_subword.length + 1)
				)
			) {
				continue
			}
			break
		}
	}
	return valid_wordset_aa
}
export {
	backward_word_reduction_compound_word_aa_ as _backward_word_reduction_compound_word_a2,
}
