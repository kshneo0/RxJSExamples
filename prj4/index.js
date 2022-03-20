var { fromEvent } = rxjs;
var { map } = rxjs.operators;

var countElement = document.getElementById("toCount");
var resultElement = document.getElementById("result");

var source = fromEvent(countElement, "keyup").pipe(
  map(function (event) {
    var input = event.target.value;
    var characters = input.length;
    var words = input.split(" ").filter(function (word) {
      return word !== "";
    }).length;
    return (
      "length of input is: " +
      characters +
      " and the amount of words is: " +
      words
    );
  })
);

source.subscribe(function (text) {
  resultElement.innerHTML = text;
});
