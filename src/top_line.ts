import type { top_Aspell } from './top_Aspell'
import { compound_word_a_ } from './compound_word_a_'
export async function top_line(this:top_Aspell, line:string) {
	if (!line) return
	const {
		queue: queue__top,
		compound_aspell,
	} = this
	const char_i0 = line.charAt(0)
	if (char_i0 === '@') return
	if (char_i0 === 'E') return
	const top = queue__top.length && queue__top.shift()
	if (!top) return
	const { word, resolve, reject } = top
	let compound_word_a
	try {
		if (char_i0 === '*') {
			compound_word_a = [word]
			resolve(compound_word_a)
			return
		}
		compound_word_a = await compound_word_a_(word, compound_aspell)
		resolve(compound_word_a)
	} catch (err) {
		console.error(err)
		console.debug(err)
		reject(err)
	}
}
export {
	top_line as __top_line,
}
