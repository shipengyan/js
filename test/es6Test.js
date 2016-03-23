/**
 * Created by shi.pengyan on 2015-11-09.
 */
'use strict';
console.log('es6 test');
// es7
//(function (x, f = () => x) {
//  var x;
//  var y = x;
//  x = 2;
//  return [x, y, f()];
//})(1);

//es7
//let x, { x: y = 1 } = {x};
//y;


class a {
}
console.log(typeof  a);

//console.log(typeof (new (class F extends(String, Array){})).substring); //?
//console.log([... [... '...']].length); // ?
//console.log(typeof (function* f() { yield f })().next().next()); //?
//console.log(typeof (new class f() { [f]() { }, f: { } })[`${f}`]); //error
console.log(typeof `${{Object}}`.prototype);//undefined
console.log(((...x, xs)=>x)(1, 2, 3));//
