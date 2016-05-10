/**
 * Created by spy on 16/05/10.
 */
var cmdUtil = require('cmd-util');
var ast = cmdUtil.ast;

var code = `
  var $ = require('a'),
      domdot = require('mobile/g/domdot.js')
  var user = {name:'testuser'};

  module.exports = user;
`;


var cmd = 'define(function(require, exports, module){' + code + '})';

var result = ast.parseFirst(cmd);

console.log('id', result.id);
console.log('dependencies', result.dependencies);

var cmdTransport = `
  define(moduleName, ${JSON.stringify(result.dependencies)}, function(require, exports, module){
    ${code}
  });
`;

console.log(cmdTransport);