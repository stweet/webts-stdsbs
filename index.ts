// Step-by-step execution

// test command
// node stdlib/sr.js -r stweet=52144 -d -f ./stweet/art -global

/**
 * 
 * @export
 * @interface IStdsbsCommand
 */
export interface IStdsbsCommand {
    cmd: string
    arg: string[]
}

/**
 * 
 * @export
 * @class Stdsbs
 */
export class Stdsbs {
    
    public static parse(input: string[]): IStdsbsCommand[] {

        let commands: IStdsbsCommand[] = []
        let command: IStdsbsCommand = null

        while (input.length) {
            let cmd: string = input.shift()

            if (/^-/ig.test(cmd)) {
                if (command) commands.push(command)
                command = {cmd, arg: []}
            } else command.arg.push(cmd)
        }
        
        if (command) commands.push(command)
        return commands
    }
}