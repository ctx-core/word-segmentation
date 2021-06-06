import { Aspell } from './Aspell'
export function aspell_(line_cb:(line:string)=>void) {
	return new Aspell(line_cb)
}
export {
	aspell_ as _aspell,
}
