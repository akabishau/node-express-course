
console.log(`dir name: ${__dirname}`) // path to current directory
console.log(`file name: ${__filename}`) // filename, including path

// module     - info about current module (file)
// process    - info about env where the program is being executed
console.log(module.exports)
console.log(process.argv)
console.log(process.versions.node)


setInterval(() => {
    console.log('repeated execution of the callback (every 1000)')
  }, 1000)