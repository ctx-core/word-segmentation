import { each, sort } from '@ctx-core/array'
import type { Aspell } from './Aspell'
export async function _backward_word_reduction_compound_word_a2(word:string, compound_aspell:Aspell):Promise<string[][]> {
	if (!word) return []
	const word_a1 = await compound_aspell.run(word)
	if (word_a1) {
		return [word_a1]
	}
	const { length } = word
	const valid_wordset_a2:string[][] = []
	const begin_subword_a2:string[][] = []
	for (let idx = length - 1; idx >= 0; idx -= 1) {
		let begin_idx__candidate = 0
		let end_idx__candidate = idx + 1
		let begin_subword = word.slice(begin_idx__candidate, end_idx__candidate)
		const begin_subword_a1 = await compound_aspell.run(begin_subword)
		if (!begin_subword_a1) continue
		begin_subword_a2.push(begin_subword_a1)
	}
	const starter_word_a1 = ['the', 'for']
	const begin_subword_a2__sort = sort(begin_subword_a2, (l:string[], r:string[])=>{
			return (
				(l.length === 1 && starter_word_a1.indexOf(l[0].toLowerCase()) > -1)
				? -1
				: (r.length === 1 && starter_word_a1.indexOf(r[0].toLowerCase()) > -1)
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
	for (let idx = 0; idx < begin_subword_a2__sort.length; idx += 1) {
		const subword_a1 = begin_subword_a2[idx]
		const [subword] = subword_a1
		const rest_idx = subword.length
		const subword__rest = word.slice(rest_idx)
		const a1__subword_rest = await compound_aspell.run(subword__rest)
		if (a1__subword_rest) {
			valid_wordset_a2.push(subword_a1.concat(...a1__subword_rest))
			break
		}
		const subword_a2__rest =
			await _backward_word_reduction_compound_word_a2(
				subword__rest,
				compound_aspell)
		each(subword_a2__rest, word_a1__rest=>
			valid_wordset_a2.push(subword_a1.concat(...word_a1__rest))
		)
		if (subword_a2__rest.length) {
			if (starter_word_a1.indexOf(subword.toLowerCase()) > -1) {
				continue
			}
			const next_subword_a1 = begin_subword_a2__sort[idx + 1]
			const next_subword = next_subword_a1 && next_subword_a1[0]
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
	return valid_wordset_a2
}
