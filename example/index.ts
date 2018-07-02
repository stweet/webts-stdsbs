import { Stack } from "./stack"
import { IStdsbsCommand, Stdsbs } from ".."
import { ConsoleCommand } from "./commands/console-command"
import { ConsoleBye } from "./commands/console-bye"

// Создаём исполнителя.
let stack: Stack = new Stack()

// Создадим обработчика.
let cmd: ConsoleCommand = new ConsoleCommand(stack)
let bye: ConsoleBye = new ConsoleBye(stack)

// Не хочу трогать глобальные переменные (клонируем ввод)
let input: string[] = process.argv.map(str => '' + str)
    input.splice(0, 2) // delete patchs

// Парсим ввод.
let args: IStdsbsCommand[] = Stdsbs.parse(input)

// Выполняем.
stack.execute(args)

// Выполняем: 
// node ./example -a width=640,height=480 -b -c ./stweet/art --bye 'This is bye message'

// Результат:
// ---------------- input size
// width   :640px
// height  :480px
// ----------------

// ConsoleCommand.printB();

// Imread path: stweet/art

// ConsoleBye.bye: "This is bye message"