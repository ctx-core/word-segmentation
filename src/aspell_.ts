import { Aspell } from './Aspell.js'
export function aspell_(line_cb:(line:string)=>void) {
	return new Aspell(line_cb)
}
export {
	aspell_ as _aspell,
}
