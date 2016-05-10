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

var oldAstSeaModule = ast.parseFirst(cmd);


const newId = 'newId';
const newAstSeaModule = {
  id: oldAstSeaModule.id || newId,
  dependencies: oldAstSeaModule.dependencies,
  factory: oldAstSeaModule.factory
};

var newContent = ast.modify(cmd, newAstSeaModule);
const result = newContent.print_to_string({beautify: true});
//file.contents = new Buffer(newContent.print_to_string({beautify: true}))

console.log(result);