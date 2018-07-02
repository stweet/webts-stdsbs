import { Stack } from "../stack";

export class ConsoleBye {

    public constructor(stack: Stack) {
        stack.registry('--bye', this.bye.bind(this))
    }

    public bye(args: string[] = []): void {
        let message: string = `"${args.pop() || 'Empty message'}"`
        console.log('ConsoleBye.bye:', message)
    }
}