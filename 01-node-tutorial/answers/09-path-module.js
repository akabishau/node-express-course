const path = require('path')

console.log(`system separator: ${path.sep}`)

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(`buiding file path: ${filePath}`)

const base = path.basename(filePath)
console.log(`base: ${base}`)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(`absolute file path: ${absolute}`)