let { fromEvent } = rxjs;
let { flatMap, takeUntil, map } = rxjs.operators;

let mouseUpStream = fromEvent(document, "mouseup");
let mouseMoveStream = fromEvent(document, "mousemove").pipe(
  takeUntil(mouseUpStream)
);

let mouseDownStream = fromEvent(document, "mousedown").pipe(
  flatMap(function () {
    return mouseMoveStream;
  }),
  map(function (event) {
    return {x: event.clientX, y: event.clientY}
  })
);

let cLabel = document.querySelector("h1")

mouseDownStream.subscribe(function (result) {
  cLabel.textContent = "x: " + result.x + " , y: " + result.y
});
