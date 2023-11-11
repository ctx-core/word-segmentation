/// <reference types="node" />
import type { ChildProcessWithoutNullStreams } from 'child_process'
import type { aspell_queue_obj_T } from '../_types/index.js'
export declare class Aspell {
	child_process:ChildProcessWithoutNullStreams
	private $queue
	constructor(line_cb:(line:string)=>void)
	get queue():aspell_queue_obj_T[]
	run(word:string):Promise<string[]|null>
	end():void
}
