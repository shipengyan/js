/**
 * Created by spy on 16/04/26.
 */


function $(selector) {
  return document.querySelector(selector);
}

document.addEventListener('DOMContentLoaded', function (e) {

  var btn1 = $('#btn1'), btn2 = $('#btn2'), btn3 = $('#btn3');
  var content = $('#content');
  var BASE_URL = '/js/mobile/popstate.html';


  btn1.addEventListener('click', function (e) {
    history.pushState({show: 'step1'}, document.title, BASE_URL + '?show=step1');
    content.innerHTML = 'step1';
  });

  btn2.addEventListener('click', function (e) {
    history.pushState({show: 'step2'}, document.title, BASE_URL + '?show=step2');
    content.innerHTML = 'step2';
  });

  btn3.addEventListener('click', function (e) {
    history.pushState({show: 'step3'}, document.title, BASE_URL + '?show=step3');
    content.innerHTML = 'step3';
  });


  setTimeout(function () {

    var content = $('#content');
    window.addEventListener('popstate', function (e) {
      alert(e.state && e.state.show);
      console.log(e.state);

      if (e.state) {
        switch (e.state.show) {
          case 'step1':
            content.innerHTML = 'step1';
            break;
          case 'step2':
            content.innerHTML = 'step2';
            break;
          case 'step3':
            content.innerHTML = 'step3';
            break;
          default:
            break;
        }
      } else {
        alert('state is empty');
        console.log('state is empty');

        // huawei 4.2.2 history.back() history.go(-1) 不起作用
        history.back(); // chrome ok
        //history.go(-2);
      }
    });

  }, 500);

});




