import type { Aspell } from '../Aspell/index.js'
import type { CompoundAspell } from '../CompoundAspell/index.js'
export declare class top_Aspell extends Aspell {
	compound_aspell:CompoundAspell
	constructor(compound_aspell:CompoundAspell);
}
