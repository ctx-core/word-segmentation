import type { words_segment_opts_T } from './words_segment_opts_T'
export function word_segmentation_streams_close(word_segmentation_streams:words_segment_opts_T) {
	const {
		top_aspell,
		compound_aspell,
	} = word_segmentation_streams
	top_aspell.end()
	compound_aspell.end()
}
export { word_segmentation_streams_close as close__streams__word_segmentation }
