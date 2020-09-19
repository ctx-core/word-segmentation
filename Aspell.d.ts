/// <reference types="node" />
import { ChildProcessWithoutNullStreams } from 'child_process';
import type { aspell_queue_obj_type } from './aspell_queue_obj_type';
export declare class Aspell {
    child_process: ChildProcessWithoutNullStreams;
    private $queue;
    constructor(__line: any);
    get queue(): aspell_queue_obj_type[];
    run(word: string): Promise<null | string[]>;
    end(): void;
}
