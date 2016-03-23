/**
 * Created by shi.pengyan on 2016-02-04.
 */
var inputEl = document.querySelector('.js-content');
var $result = $('.result');

var keyups = Rx.Observable.fromEvent(inputEl, 'keyup')
    .pluck('target', 'value')
    .filter(function (value) {
        console.log('value length', value.length);
        return value.length > 2;
    });

var debounced = keyups.debounce(500);
var distinct = debounced.distinctUntilChanged();

function searchWikipedia(term) {
    return $.ajax({
        url: 'https://en.wikipedia.org/w/api.php',
        dataType: 'jsonp',
        data: {
            action: 'opensearch',
            format: 'json',
            search: term
        }
    }).promise();
}

var suggestions = distinct.flatMapLatest(searchWikipedia);

suggestions.subscribe(
    data => {
        $result.empty().append($.map(data[1], value => $('<li>').text(value)));
    },
    error => {
        $result.empty().append($('<li>')).text('error:' + error)
    }
);