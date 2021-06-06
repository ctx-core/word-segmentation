import { flatten, map } from '@ctx-core/array'
import { CompoundAspell } from './CompoundAspell'
import { top_Aspell } from './top_Aspell'
import { token_a_ } from './token_a_'
import type { words_segment_opts_T } from './words_segment_opts_T'
export async function segment_words(
	phrases:string,
	{
		top_aspell,
		compound_aspell,
	} = {} as words_segment_opts_T
) {
	if (!phrases) return phrases
	if (!compound_aspell) {
		compound_aspell = new CompoundAspell()
	}
	if (!top_aspell) {
		top_aspell = new top_Aspell(compound_aspell)
	}
	const corrected_word_token_a2 = await _corrected_word_token_a2()
	return (
		flatten(corrected_word_token_a2)
			.join(' ')
			.trim()
			.replace(/\s+,\s+/g, ', ')
			.replace(/\s+-\s+/g, '-')
			.replace(/\s+\/\s+/g, '-')
			.replace(/\s+\./g, '.')
			.replace(/\s+/g, ' ')
	)
	async function _corrected_word_token_a2() {
		const token_a1 = token_a_(phrases)
		const promise_a =
			map<string, Promise<string[]>>(token_a1,
				token=>new Promise(async resolve=>{
					if (!token) {
						resolve([''])
						return
					}
					if (/\W/.test(token) || /^[0-9]+$/.test(token)) {
						resolve([token])
						return
					}
					const top_aspell_a1 = await top_aspell.run(token)
					resolve(top_aspell_a1 || [])
				}))
		return await (Promise.all<string[]>(promise_a))
	}
}
export { segment_words as segment__words }
