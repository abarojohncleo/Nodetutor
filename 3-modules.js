// CommonJS , every file in node is a module
// Modules - Encapsulated Code (minimum sharing)

const name = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-addfunction'); //when using required it will automatically be executed

console.log(data)
sayHi('susan')
sayHi(name.john)
sayHi(name.peter)