/**
 * Created by spy on 16/05/09.
 */
var co = require('co');


co(function *() {
  yield runBuild();
  yield runStart();
}).catch(function (e) {
  console.log(e)
});

function* runBuild() {
  console.log('run build')
  console.log('1')
  yield {a: 1};
  console.log('2')
  yield {a: 2};
}

function* runStart() {
  console.log('run start');
  console.log('3')
  yield {a: 3};
  console.log('4')
  yield {a: 4};
}
