/**
 * Created by spy on 16/05/15.
 */
function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  } else {
    var _ret = function () {
      var last = funcs[funcs.length - 1];
      var rest = funcs.slice(0, -1);
      return {
        v: function v() {
          return rest.reduceRight(function (composed, f) {
            return f(composed);
          }, last.apply(undefined, arguments));
        }
      };
    }();

    if (typeof _ret === "object") return _ret.v;
  }
}

function a(next) {
  return function (action) {
    return next(action + 'a');
  }
};
function b(next) {
  return function (action) {
    return next(action + 'b');
  }
};
function c(next) {
  return function (action) {
    return next(action + 'c');
  }
};

var finalFunc = function (x) {
  return x;
}

//console.log(compose(a,b,c))
console.log(compose(a, b, c)(finalFunc)(''));

////exec c
//function (action) {
//  return next(action + 'c');
//}
//
////exec b
//function (action) {
//  var action = action + 'b';
//  return function (action) {
//    return next(action + 'c')
//  }
//}
////exec a
//function (action) {
//  var action = action + 'a';
//  return function (action) {
//    var action = action + 'b';
//    return function (action) {
//      return next(action + 'c')
//    }
//  }
//}
  
