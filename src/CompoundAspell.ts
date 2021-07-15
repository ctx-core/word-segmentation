import { Aspell } from './Aspell.js'
import { compound_line } from './compound_line.js'
export class CompoundAspell extends Aspell {
	constructor() {
		super(compound_line)
	}
}
export type Aspell__compound = CompoundAspell
