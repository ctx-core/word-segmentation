import { CompoundAspell } from '../CompoundAspell/index.js'
import { top_Aspell } from '../top_Aspell/index.js'
/**
 * @returns {import('./index.d.ts').word_segmentation_streams__ret_T}
 */
export function word_segmentation_streams_() {
	const compound_aspell = new CompoundAspell()
	const top_aspell = new top_Aspell(compound_aspell)
	return {
		top_aspell,
		compound_aspell
	}
}
export {
	word_segmentation_streams_ as _word_segmentation_streams,
	word_segmentation_streams_ as _streams__word_segmentation,
}
