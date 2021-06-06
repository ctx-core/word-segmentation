import { map } from '@ctx-core/array'
import { title_case_ } from '@ctx-core/string'
export function aspell_line_compound_title_case_(line:string):string[]|undefined {
	const line_a = line.split(': ')
	const word = line_a[0].split(' ')[1]
	const alt_word = line_a[1].split(', ')[0]
	const alt_a = alt_word.split(' ')
	if (
		alt_a.length < 2 && alt_a[0].slice(-2) !== '\'s'
		|| word.replace(/\W/g, '') != alt_word.replace(/\W/g, '')
	) return
	return map(alt_a, title_case_)
}
export {
	aspell_line_compound_title_case_ as _aspell_line_compound_title_case,
	aspell_line_compound_title_case_ as _title_case__compound__line__aspell,
}
