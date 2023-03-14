const { readFile, writeFile } = require('fs')

readFile('./answers/content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }

    const first = result


    readFile('./answers/content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }

        const second = result

        writeFile(
            './answers//content/result-async.txt',
            `\nHere is the ASYNC result:\n${first}\n${second}`,
            { flag: 'a' }, // optional: add to content; without override
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log('async write is finished')
            }
        )
    })
})