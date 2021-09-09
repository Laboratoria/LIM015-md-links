const prueba = 'dentro de la secondDIrectoy'
const path = require('path')
const pathTest = process.argv[2]
const dirname = path.dirname(pathTest)
console.log(dirname)