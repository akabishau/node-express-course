const { readFileSync, writeFileSync, read } = require('fs')

const first = readFileSync('./answers/content/first.txt', 'utf8')
const second = readFileSync('./answers/content/second.txt', 'utf8')


//console.log(first, second)

writeFileSync(
    './answers/content/result-sync.txt',
    `\nHere is the SYNC result:\n${first}\n${second}`,
    { flag: 'a' } // optional: add to content; without override
)