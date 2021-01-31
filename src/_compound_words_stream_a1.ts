import { ReadableStream, WritableStream } from 'memory-streams'
import { createInterface } from "readline"
import { _word_segmentation_streams } from './_word_segmentation_streams'
import { segment_words } from './segment_words'
export function _compound_words_stream_a1() {
	const streams__word_segmentation = _word_segmentation_streams()
	const readable = new ReadableStream('')
	const writable = new WritableStream()
	const rl = createInterface(readable)
	rl.on('line', line=>{
		segment_words(line, streams__word_segmentation)
	})
	return [readable, writable]
}
export const _stream_a1__compound_words = _compound_words_stream_a1
