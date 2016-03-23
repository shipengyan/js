/**
 * Created by shi.pengyan on 2016-02-24.
 */
!function () {
  var mobile = {};


  mobile.addEvent = function (el, type, func, useCapture) {
    el.addEventListener(type, func, !!useCapture);
  };

  mobile.removeEvent = function (el, type, func) {
    el.removeEventListener(type, func);
  };


  window.mobile = mobile;


}();