var { fromEvent } = rxjs;
var { map } = rxjs.operators;

var countElement = document.getElementById("toCount");
var resultElement = document.getElementById("result");

var source = fromEvent(countElement, "keyup").pipe(
  map(function (event) {
    console.log(event);
  })
);

source.subscribe(function (e) {});
