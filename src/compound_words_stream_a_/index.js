import { ReadableStream, WritableStream } from 'memory-streams'
import { createInterface } from 'readline'
import { segment_words } from '../segment_words/index.js'
import { word_segmentation_streams_ } from '../word_segmentation_streams_/index.js'
export function compound_words_stream_a_() {
	const word_segmentation_streams = word_segmentation_streams_()
	const readable = new ReadableStream('')
	const writable = new WritableStream()
	const rl = createInterface(readable)
	rl.on('line', (line)=>{
		segment_words(line, word_segmentation_streams).then()
	})
	return [
		readable,
		writable
	]
}
export {
	compound_words_stream_a_ as _compound_words_stream_a,
	compound_words_stream_a_ as _stream_a1__compound_words,
}
