/// <reference types="node" />
import { ChildProcessWithoutNullStreams } from 'child_process';
import type { aspell_queue_obj_T } from './aspell_queue_obj_T';
export declare class Aspell {
    child_process: ChildProcessWithoutNullStreams;
    private $queue;
    constructor(line_cb: (line: string) => void);
    get queue(): aspell_queue_obj_T[];
    run(word: string): Promise<null | string[]>;
    end(): void;
}
