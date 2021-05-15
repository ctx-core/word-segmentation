import type { CompoundAspell } from './CompoundAspell'
export function __compound_line(this:CompoundAspell, line: string) {
	if (!line) return
	const { queue } = this
	const char_0 = line.charAt(0)
	if (char_0 === '@') return
	const top = queue.shift()
	if (!top) return
	let word_a1
	const { word, resolve } = top
	if (char_0 === '*') {
		word_a1 = [word]
		resolve(word_a1)
		return
	}
	resolve(null)
}
