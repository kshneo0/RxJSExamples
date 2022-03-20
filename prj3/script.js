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
    return {}
  })
);

mouseDownStream.subscribe(function (result) {
  console.log(result);
});
