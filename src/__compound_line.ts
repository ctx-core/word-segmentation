import type { Aspell__compound } from './Aspell__compound'
export function __compound_line(this:Aspell__compound, line) {
	if (!line) return
	const { queue } = this
	const char__0 = line.charAt(0)
	if (char__0 === '@') return
	const top = queue.shift()
	if (!top) return
	let word_a1
	const { word, resolve } = top
	if (char__0 === '*') {
		word_a1 = [word]
		resolve(word_a1)
		return
	}
	resolve(null)
}
