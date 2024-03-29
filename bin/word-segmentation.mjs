#!/usr/bin/env node
import { createInterface } from 'readline'
import { queue_ } from 'ctx-core/queue'
import { segment_words } from '../segment_words/index.js'
await main()
async function main() {
	const stdin_rl = createInterface(process.stdin)
	const queue = queue_()
	stdin_rl.on('line', line => {
		queue.add(async () => {
			const compound_words = await segment_words(line)
			process.stdout.write(`${compound_words}\n`)
		})
	})
	stdin_rl.on('close', async () => {
		await queue.close()
		process.exit(0)
	})
}
