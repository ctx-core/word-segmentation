import { spawn } from 'child_process';
import { createInterface } from 'readline';
export class Aspell {
    constructor(line_cb) {
        this.$queue = [];
        this.child_process = spawn('aspell', ['-a']);
        const { child_process } = this;
        child_process.stderr.pipe(process.stderr);
        const rl = createInterface(child_process.stdout);
        rl.on('line', line_cb.bind(this));
    }
    get queue() {
        return this.$queue;
    }
    async run(word) {
        return new Promise((resolve, reject) => {
            this.$queue.push({ word, resolve, reject });
            this.child_process.stdin.write(`${word}\n`);
        });
    }
    end() {
        this.child_process.stdin.end();
    }
}
//# sourceMappingURL=src/Aspell.js.map