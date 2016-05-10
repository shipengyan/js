/**
 * Created by spy on 16/05/10.
 */
var ranma = require('ranma');

var code = `
  var $ = require('a'),
      domdot = require('mobile/g/domdot.js')
  var user = {name:'testuser'};

  module.exports = user;
`;

var result = ranma.cmdify(code);

console.log(result);