import { Aspell } from './Aspell'
import type { CompoundAspell } from './CompoundAspell'
import { top_line } from './top_line'
export class top_Aspell extends Aspell {
	constructor(public compound_aspell:CompoundAspell) {
		super(top_line)
	}
}
