import { flatten, map } from '@ctx-core/array'
import { CompoundAspell } from '../CompoundAspell/index.js'
import { top_Aspell } from '../top_Aspell/index.js'
import { token_a_ } from '../token_a_/index.js'
/**
 * @param phrases{string}
 * @param opts{import('../_types').words_segment_opts_T}
 * @returns {Promise<string>}
 */
export async function segment_words(
	phrases, opts = {}
) {
	let { top_aspell, compound_aspell } = opts
	if (!phrases) return phrases
	if (!compound_aspell) {
		compound_aspell = new CompoundAspell()
	}
	if (!top_aspell) {
		top_aspell = new top_Aspell(compound_aspell)
	}
	const corrected_word_token_aa = await corrected_word_token_aa_()
	return flatten(corrected_word_token_aa).join(' ').trim().replace(/\s+,\s+/g, ', ').replace(/\s+-\s+/g, '-').replace(/\s+\/\s+/g, '-').replace(/\s+\./g, '.').replace(/\s+/g, ' ')
	async function corrected_word_token_aa_() {
		const token_a = token_a_(phrases)
		const promise_a = map(token_a, (token)=>new Promise(async (resolve)=>{
			if (!token) {
				resolve([
					''
				])
				return
			}
			if (/\W/.test(token) || /^[0-9]+$/.test(token)) {
				resolve([
					token
				])
				return
			}
			const top_aspell_a = await top_aspell.run(token)
			resolve(top_aspell_a || [])
		}))
		return await Promise.all(promise_a)
	}
}
export { segment_words as segment__words }
//# sourceMappingURL=segment_words.js.map
