import { Aspell } from '../Aspell/index.js'
import { top_line } from '../top_line/index.js'
export class top_Aspell extends Aspell {
	constructor(compound_aspell) {
		super(top_line)
		this.compound_aspell = compound_aspell
	}
}
