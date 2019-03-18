//将其他模块汇集到主模块zhong

let uniq = require('uniq')
let module1 = require('./modules/modules1')
let module2 = require('./modules/modules2')
let module3 = require('./modules/modules3')

module1.foo()
module2()
module3.bar()
module3.foo()

let resutl = uniq(module3.arr)
console.log(resutl)
