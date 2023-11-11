import { Aspell } from '../Aspell/index.js'
import { compound_line } from '../compound_line/index.js'
export class CompoundAspell extends Aspell {
	constructor() {
		super(compound_line)
	}
}
