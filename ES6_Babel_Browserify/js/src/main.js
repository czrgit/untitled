//引入其他模块
import $ from 'jquery'
import {foo,bar} from './module1'
import {fun2,fun} from './module2'
import module3 from './module3'
$('body').css('background','red')
foo();
bar();
fun();
fun2();
module3.foo();
