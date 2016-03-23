/**
 * Created by shi.pengyan on 2016-01-13.
 */
define(function (require, exports, module) {
    var c= require;
    module.exports = {
        say: function () {
            console.log('hello world');
        },
        say2: function () {
            c('./b');
        }
    };
});