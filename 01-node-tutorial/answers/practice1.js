// In practice1.js, require the sentence variable from the practice2.js module.
const fileContent = require('./practice2')

//Require also the os and fs modules.
const fs = require('fs')
const os = require('os')

// Then, also in practice1.js, write code that will create a file, ./content/practice.txt. 
// Use asynchronous write operations.
// Write first the sentence and then the os.userInfo().username to the file. 

const filePath = './content/practice.txt'
const userInfo = os.userInfo()

// console.log(fileContent)
// console.log(userInfo)
// console.log(typeof(userInfo))
// console.log(JSON.stringify(userInfo))

fs.writeFile(
    filePath,
    fileContent + '\n',
    (err) => {
        if (err) {
            console.log('Error writing content: ' + err)
            return
        }
        console.log(`"${fileContent}" is written to file: ${filePath}`)

        fs.writeFile(
            filePath,
            JSON.stringify(userInfo),
            {flag: 'a'},
            (err) => {
                if (err) {
                    console.log('Error writing User Info: ' + err)
                    return
                }
                console.log('User Info is added to the file above')
            }
        )
    }
)