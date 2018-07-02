import { Stack } from "../stack"
import * as path from "path"

export class ConsoleCommand {

    public constructor(stack: Stack) {
        stack.registry('-a', this.printA.bind(this))
        stack.registry('-b', this.printB.bind(this))
        stack.registry('-c', this.printC.bind(this))
    }

    public printA(args: string[] = []): void {
        console.log('---------------- input size')

        args.shift().split(',').forEach(value => {
            let [k, v] = value.split('=')
            console.log(k + "\t:" + v + 'px')
        })
        
        console.log('----------------\n')
    }

    public printB(args: string[] = []): void {
        console.log('ConsoleCommand.printB();\n')
    }

    public printC(args: string[] = []): void {
        
        let i: string = args.shift()
            i = path.normalize(i)

        console.log('Imread path: ' + i + '\n')
    }
}