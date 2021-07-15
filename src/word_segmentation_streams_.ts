import { CompoundAspell } from './CompoundAspell.js'
import { top_Aspell } from './top_Aspell.js'
export function word_segmentation_streams_() {
	const compound_aspell = new CompoundAspell()
	const top_aspell = new top_Aspell(compound_aspell)
	return {
		top_aspell,
		compound_aspell,
	}
}
export {
	word_segmentation_streams_ as _word_segmentation_streams,
	word_segmentation_streams_ as _streams__word_segmentation,
}
