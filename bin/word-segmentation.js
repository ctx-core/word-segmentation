#!/usr/bin/env node
require = require('esm')(module)
const { createInterface } = require('readline')
const { _queue } = require('@ctx-core/queue')
const { segment__words } = require('../lib')
main()
async function main() {
	const stdin_rl = createInterface(process.stdin)
	const queue = _queue()
	stdin_rl.on('line', line => {
		queue.add(async () => {
			const compound_words = await segment__words(line)
			process.stdout.write(`${compound_words}\n`)
		})
	})
	stdin_rl.on('close', async () => {
		await queue.close()
		process.exit(0)
	})
}
