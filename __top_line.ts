import type { Aspell__top } from './Aspell__top'
import { _compound_word_a1 } from './_compound_word_a1'
export async function __top_line(this:Aspell__top, line) {
	if (!line) return
	const {
		queue: queue__top,
		compound_aspell,
	} = this
	const char__0 = line.charAt(0)
	if (char__0 === '@') return
	if (char__0 === 'E') return
	const top = queue__top.length && queue__top.shift()
	if (!top) return
	const { word, resolve, reject } = top
	let compound_word_a1
	try {
		if (char__0 === '*') {
			compound_word_a1 = [word]
			resolve(compound_word_a1)
			return
		}
		compound_word_a1 = await _compound_word_a1(word, compound_aspell)
		resolve(compound_word_a1)
	} catch (err) {
		console.error(err)
		console.debug(err)
		reject(err)
	}
}
