export function word_segmentation_streams_close(streams__word_segmentation) {
	const {
		top_aspell,
		compound_aspell,
	} = streams__word_segmentation
	top_aspell.end()
	compound_aspell.end()
}
export const close__streams__word_segmentation = word_segmentation_streams_close
