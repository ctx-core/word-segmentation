import { Aspell__compound } from './Aspell__compound'
import { Aspell__top } from './Aspell__top'
export function _word_segmentation_streams() {
	const compound_aspell = new Aspell__compound()
	const top_aspell = new Aspell__top(compound_aspell)
	return {
		top_aspell,
		compound_aspell,
	}
}
export const _streams__word_segmentation = _word_segmentation_streams
