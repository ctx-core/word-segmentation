export function token_a_(phrases) {
    return phrases
        //		.replace(/(.+)and(.*)/ig, '$1 and $2')
        .split(/(\S+'\S)|\s+|\b/);
}
//# sourceMappingURL=src/token_a_.js.map