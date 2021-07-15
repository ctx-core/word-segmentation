import type { CompoundAspell } from './CompoundAspell.js'
export function compound_line(this:CompoundAspell, line: string):void {
	if (!line) return
	const { queue } = this
	const char_0 = line.charAt(0)
	if (char_0 === '@') return
	const top = queue.shift()
	if (!top) return
	let word_a
	const { word, resolve } = top
	if (char_0 === '*') {
		word_a = [word]
		resolve(word_a)
		return
	}
	resolve(null)
}
export {
	compound_line as __compound_line,
}
