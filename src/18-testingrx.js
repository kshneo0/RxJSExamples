import { fromEvent, interval } from "rxjs";
import { throttle } from "rxjs/operators";

let btn = document.getElementById("btnclick");
let btn_clicks = fromEvent(btn, "click");
let case1 = btn_clicks.pipe(throttle((ev) => interval(2000)));
case1.subscribe((x) => console.log(x));

// When you click on the button the first click event will be emmitted,
// the subsequent clicks will be delayed for the time given to throttle() operator.
