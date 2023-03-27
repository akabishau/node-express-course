const fs = require('fs').promises;
const firstLine = 'This is the first line.'
const filePath = './content/practice2.txt'

const makeFile = async () => {
  try {
    // first line
    await fs.writeFile(filePath, firstLine + '\n');

    // rest of the lines
    for (let i = 2; i <= 10; i++) {
      const line = `This is line ${i}\n`;
      await fs.writeFile(filePath, line, {flag: 'a'})
    }
    console.log('completed');
  } catch (error) {
    console.log(error);
  }
}

makeFile()


// Within practice3.js, create an async function called makeFile. 
// This function should create the file ./content/practice2.txt, using asynchronous calls that return promises. 
// These must all be within a try/catch block. Use await to get the results of each call. 
// The first line, written without the append flag, should say “This is the first line.” and should end with a newline character. 
// The next lines, each of which should end in a line end, should read “This is line 2”, then “This is line 3”, and so on up to 10. 
// These should be written in a loop, with the append flag. 
// The catch statement should log the error, if any, to the console. 
// After the makeFile function declaration, add a program line that calls makeFile(). 
// Test the practice3.js program to make sure it creates the file correctly.