function interpret(command: string): string {
    return command.replace(new RegExp(/\(\)/, "g"), "o")
        .replace(new RegExp(/\(al\)/, "g"), "al");
};
