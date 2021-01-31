import { Aspell } from './Aspell'
import type { Aspell__compound } from './Aspell__compound'
import { __top_line } from './__top_line'
export class Aspell__top extends Aspell {
	compound_aspell:Aspell__compound
	constructor(compound_aspell) {
		super(__top_line)
		this.compound_aspell = compound_aspell
	}
}
