
require('./answers/07-mind-grenade') // simply running everything in file

const names = require('./answers/04-names')
const sayHi = require('./answers/05-utils')
const altFlavorData = require('./answers/06-alternative-flavor')


console.log(names.someSharedValue)
sayHi(names.aleksey)
console.log(altFlavorData)
sayHi(altFlavorData.sharedPerson.name)

module.exports = { names, sayHi, altFlavorData }