/**
 * Created by shi.pengyan on 2016-01-10.
 */
function $(selector) {
    return document.querySelector(selector);
}

var browser = {
    isIE: function () {
        return !/Trident|MSIE/.test(navigator.userAgent);
    }
};
