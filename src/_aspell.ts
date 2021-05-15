import { Aspell } from './Aspell'
export function _aspell(__line:(line:string)=>void) {
	return new Aspell(__line)
}
