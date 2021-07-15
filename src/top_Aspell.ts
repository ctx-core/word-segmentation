import { Aspell } from './Aspell.js'
import type { CompoundAspell } from './CompoundAspell.js'
import { top_line } from './top_line.js'
export class top_Aspell extends Aspell {
	constructor(public compound_aspell:CompoundAspell) {
		super(top_line)
	}
}
