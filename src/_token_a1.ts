export function _token_a1(phrases: string) {
	return phrases
		//		.replace(/(.+)and(.*)/ig, '$1 and $2')
		.split(/(\S+'\S)|\s+|\b/)
}
