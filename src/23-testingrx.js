import { fromEvent } from "rxjs";
import { delay } from "rxjs/operators";

let btn = document.getElementById("btnclick");
let btn_clicks = fromEvent(btn, "click");
let case1 = btn_clicks.pipe(delay(2000));
case1.subscribe((x) => console.log(x));

// Here the click event is delayed using debounce() operator
