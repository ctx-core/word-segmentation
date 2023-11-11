/**
 * @param {string}phrases
 * @returns {string[]}
 */
export function token_a_(phrases) {
	return phrases//		.replace(/(.+)and(.*)/ig, '$1 and $2')
		.split(/(\S+'\S)|\s+|\b/)
}
