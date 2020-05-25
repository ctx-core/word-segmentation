#!/usr/bin/env node
import { createInterface } from 'readline'
import { _queue } from '@ctx-core/queue'
import { segment__words } from '../lib'
main()
async function main() {
	const rl__stdin = createInterface(process.stdin)
	const queue = _queue()
	rl__stdin.on('line', line => {
		queue.add(async () => {
			const compound_words = await segment__words(line)
			process.stdout.write(`${compound_words}\n`)
		})
	})
	rl__stdin.on('close', async () => {
		await queue.close()
		process.exit(0)
	})
}
