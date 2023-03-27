const { writeFileSync } = require('fs')

// example of creation the big file
for (let i =0; i < 10000; i++) {
    writeFileSync(
        './content/bigfile.txt', 
        `hello world ${i}\n`, 
        { flag: 'a'})
}