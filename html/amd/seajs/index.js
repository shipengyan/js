/**
 * Created by shi.pengyan on 2016-01-13.
 */
define(function (require, exports, module) {
    var a = require('./a');
    a.say();
    setTimeout(function () {
        a.say2();
    }, 5000);
});