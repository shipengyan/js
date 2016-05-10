//适用场景：1.异步操作重，2.同时处理多个数据源。


//promise
var reqData1 = url => new Promise((resolve, reject) => setTimeout(() => resolve(42), 1000));
var reqData2 = url => new Promise((resolve, reject) => setTimeout(() => resolve(52), 500));
var reqData3 = (url, params) => new Promise((resolve, reject) => setTimeout(() => resolve(62), 800));
var data = {};
Promise.all([reqData1(api_1), reqData2(api_2)]).then((data1, data2) => {
  data.data1 = data1;
  data.data2 = data2;
  return reqData3(api_3, {id: data2.id});
}).then(data3 => {
  data.data3 = data3;
  initComponent(data);
});


//rx.js
var reqData1 = (url, cb) => setTimeout(() => cb(42), 1000);
var reqData2 = (url, cb) => setTimeout(() => cb(52), 500);
var reqData3 = (url, params, cb) => setTimeout(() => cb(62), 800);

var dataReq1 = new Rx.Subject();
var dataReq2 = new Rx.Subject();

Rx.Observable.when(dataReq1.and(dataReq2).thenDo((data1, data2) => {
  return {data1: data1, data2: data2}
})).flatMap(data => {
  var s = new Rx.Subject()
  reqData3(api_3, {id: e.data2.id}, e => {
    data.data3 = e;
    s.onNext(data);
    s.onCompleted();
  });
  return s;
}).subscribe(data => {
  initComponent(data);
});
reqData1(api_1, (e) => dataReq1.onNext(e));
reqData2(api_2, (e) => dataReq2.onNext(e));


//buton点击或每隔5s执行
function wait(duration) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, duration);
  })
}
function waitFor(element, event, useCapture) {
  return new Promise(function (resolve, reject) {
    element.addEventListener(event, function listener(event) {
      resolve(event)
      this.removeEventListener(event, listener, useCapture);
    }, useCapture)
  })
}
var btn = document.getElementById('button');
Promise.race(wait(5000), waitFor(btn, click)).then(function () {
  console.log('run!')
})


//rx.js写法
var btn = document.getElementById('button');
var logRun = Rx.Observable.fromEvent(btn, 'click').merge(Rx.Observable.timer(5000)).subscribe(e => {
  console.log('run!');
  logRun.dispose(); // 如果是一次性的就移除observable
});