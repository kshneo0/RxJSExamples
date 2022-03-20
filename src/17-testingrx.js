import { fromEvent, interval } from "rxjs";
import { skip } from "rxjs/operators";

let btn = document.getElementById("btnclick");
let btn_clicks = fromEvent(btn, "click");
let case1 = btn_clicks.pipe(skip(2));
case1.subscribe((x) => console.log(x));

// first two clicks are ignored
