const { createReadStream } = require('fs')

const stream = createReadStream('./content/bigfile.txt')
stream.on('data', result => {
    console.log(result)
})

stream.on('error', (err) => console.log(err)) // example is wrong path to the file

//fs.createSteam events: ready, open, close

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })