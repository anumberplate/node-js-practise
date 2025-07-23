/* Importing os library */
const os = require("os")
const path = require('path')
const {add , multiply, subtract, divide} = require('./math')

console.log(add(2,3))
console.log(subtract(2,3))
console.log(multiply(2,3))
console.log(divide(2,3))

 /* Gives the os type 
console.log(os.type())
 Gives the os version 
console.log(os.version())
 Gives the os home directory 
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

 Returns the path of the file 
console.log(path.dirname(__filename))
 Returns the name of the file 
console.log(path.basename(__filename))
 Returns the extension of the file 
console.log(path.extname(__filename))

 Returns object 
console.log(path.parse(__filename)) */