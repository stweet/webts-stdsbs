import { IStdsbsCommand } from ".."

/**
 * 
 * @export
 * @class Stack
 */
export class Stack {
    
    private _commands: {[key: string]: Function} = {}

    public registry(prefix: string, command: Function): void {
        this._commands[prefix] = command
    }

    public execute(args: IStdsbsCommand[]): void {

        for (let i = 0; i < args.length; i ++) {

            let arg: string[] = args[i].arg
            let cmd: string = args[i].cmd

            if (!this._commands[cmd]) {
                continue
            }

            this._commands[cmd](arg)
        }
    }
}