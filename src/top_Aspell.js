import { Aspell } from './Aspell';
import { top_line } from './top_line';
export class top_Aspell extends Aspell {
    constructor(compound_aspell) {
        super(top_line);
        this.compound_aspell = compound_aspell;
    }
}
//# sourceMappingURL=src/top_Aspell.js.map