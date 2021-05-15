import { Aspell } from './Aspell'
import { __compound_line } from './__compound_line'
export class CompoundAspell extends Aspell {
	constructor() {
		super(__compound_line)
	}
}
export type Aspell__compound = CompoundAspell
