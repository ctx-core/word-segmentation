import { Aspell } from './Aspell'
import type { CompoundAspell } from './CompoundAspell'
import { __top_line } from './__top_line'
export class Aspell__top extends Aspell {
	constructor(public compound_aspell:CompoundAspell) {
		super(__top_line)
	}
}
