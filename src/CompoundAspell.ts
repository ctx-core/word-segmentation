import { Aspell } from './Aspell'
import { compound_line } from './compound_line'
export class CompoundAspell extends Aspell {
	constructor() {
		super(compound_line)
	}
}
export type Aspell__compound = CompoundAspell
