export function word_segmentation_streams_close(word_segmentation_streams) {
    const { top_aspell, compound_aspell, } = word_segmentation_streams;
    top_aspell.end();
    compound_aspell.end();
}
export { word_segmentation_streams_close as close__streams__word_segmentation };
//# sourceMappingURL=src/word_segmentation_streams_close.js.map