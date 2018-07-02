# webts-stdsbs
Парсер консольного ввода

```javascript
import { IStdsbsCommand, Stdsbs } from "."

let args: IStdsbsCommand[] = Stdsbs.parse(input)
console.log(args)
```
Так мы запускаем наш скрипт:
```bash
$ node index.js --command "Hello world!"
```
То, что мы видим в консоле:
```javascript
{
    cmd: '--command',
    arg: ["Hello world!"]
}
```