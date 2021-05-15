import { map } from '@ctx-core/array'
import { _title_case } from '@ctx-core/string'
export function _aspell_line_compound_title_case(line:string):string[]|undefined {
	const line_a1 = line.split(': ')
	const word = line_a1[0].split(' ')[1]
	const alt_word = line_a1[1].split(', ')[0]
	const alt_a1 = alt_word.split(' ')
	if (
		alt_a1.length < 2 && alt_a1[0].slice(-2) !== '\'s'
		|| word.replace(/\W/g, '') != alt_word.replace(/\W/g, '')
	) return
	return map(alt_a1, _title_case)
}
export { _aspell_line_compound_title_case as _title_case__compound__line__aspell }
