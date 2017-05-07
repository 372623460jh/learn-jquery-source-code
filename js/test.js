/**
 * Created by jianghe on 2017/4/26.
 */

'use strict'

// function foo(x) {
//     var tmp = 3;
//     return function (y) {
//         console.log(x + y + tmp);
//         x.memb = x.memb ? x.memb + 1 : 1;
//         console.log(x.memb);
//     }
// }
// var age = new Number(2);
// var bar = foo(age); // bar 现在是一个引用了age的闭包
// bar(10);
// bar(10);

// console.log(String(null));
// console.log(typeof {});
// console.log({}[{}.toString.call(foo)]);


// console.log(0||2&&(3||4));
//
//
// if(-1){
//     console.log(111111);
// }

// var name = "The Window";
// var object = {
//     name : "My Object",
//     getNameFunc : function(){
//         return function(){
//             console.log(this);
//             return this.name;
//         };
//     }
// };
// console.log(object.getNameFunc()());

// function test() {
//     this.name = '123';
// }
//
// test.test1 = function () {
//     console.log(this);
// }
//
// test.test1();

// var options;
//
// if ((options = 3) != 3) {
//     console.log(123123);
// }

// console.log(1) || 3 && (console.log(2) || console.log(3));

// 3 && console.log(2) || console.log(3)


// var a = console.log(2);
// console.log(a);

// var s = 3 || console.log(1) && (console.log(2) || console.log(3));
//
// console.log(s);
// 3 || console.log(1) && (console.log(2) || console.log(3));

// console.log(isFinite(2/0));

var str = '-ms-uiaysd-ysh'

var ss = str.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function (ss,a) {
    console.log(ss+' '+a);
})

console.log(ss);

// console.log(0 || 2 && (3 || 4));