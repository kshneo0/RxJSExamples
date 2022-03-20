import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";

let btn = document.getElementById("btnclick");
let btn_clicks = fromEvent(btn, "click");

let positions = btn_clicks.pipe(map((ev) => ev));
positions.subscribe((x) =>
  console.log("x: " + x.clientX + " and y: " + x.clientY)
);
