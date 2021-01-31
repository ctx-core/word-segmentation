import { ChildProcessWithoutNullStreams, spawn } from 'child_process'
import { createInterface } from 'readline'
import type { aspell_queue_obj_type } from './aspell_queue_obj_type'
export class Aspell {
	child_process:ChildProcessWithoutNullStreams
	private $queue = [] as aspell_queue_obj_type[]
	constructor(__line) {
		this.child_process = spawn('aspell', ['-a'])
		const { child_process } = this
		child_process.stderr.pipe(process.stderr)
		const rl = createInterface(child_process.stdout)
		rl.on('line', __line.bind(this))
	}
	get queue() {
		return this.$queue
	}
	async run(word:string):Promise<null|string[]> {
		return new Promise((resolve, reject)=>{
			this.$queue.push({ word, resolve, reject })
			this.child_process.stdin.write(`${word}\n`)
		})
	}
	end() {
		this.child_process.stdin.end()
	}
}
