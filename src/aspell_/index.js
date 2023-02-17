import { Aspell } from '../Aspell/index.js'
/**
 * @param line_cb{(line:string)=>void}
 * @returns {Aspell}
 */
export function aspell_(line_cb) {
	return new Aspell(line_cb)
}
export { aspell_ as _aspell, }
