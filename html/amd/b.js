/**
 * Created by shi.pengyan on 2016-01-15.
 */
define(function () {
    console.log('b');
});

define('b2', function () {
    console.log('b2');
});

define('b1', function () {
    console.log('b1');
    return {};
});