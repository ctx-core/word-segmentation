import { spawn } from 'child_process'
import { createInterface } from 'readline'
/** @typedef {import('../_types/index.d.ts').aspell_queue_obj_T}.aspell_queue_obj_T */
export class Aspell {
	/**
	 * @returns {aspell_queue_obj_T[]}
	 */
	get queue() {
		return this.$queue
	}
	/**
	 * @param {string}word
	 * @returns {Promise<string[]|null>}
	 */
	async run(word) {
		return new Promise((resolve, reject)=>{
			this.$queue.push({
				word,
				resolve,
				reject
			})
			this.child_process.stdin.write(`${word}\n`)
		})
	}
	end() {
		this.child_process.stdin.end()
	}
	/**
	 * @param line_cb{(line:string)=>void}
	 */
	constructor(line_cb) {
		/** @typedef {aspell_queue_obj_T[]} */
		this.$queue = []
		this.child_process = spawn('aspell', [
			'-a'
		])
		const { child_process } = this
		child_process.stderr.pipe(process.stderr)
		const rl = createInterface(child_process.stdout)
		rl.on('line', line_cb.bind(this))
	}
}
