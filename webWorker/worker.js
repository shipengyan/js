/**
 * Created by shi.pengyan on 2015-12-10.
 */

console.log('this is worker.');

self.addEventListener('message', function (event) {
    console.log('worker receive data', event.data);
    self.postMessage({userId: 111111});
}, false);

importScripts('worker_sub.js');
