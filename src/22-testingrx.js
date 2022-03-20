import { of } from "rxjs";
import { tap, filter } from "rxjs/operators";

let list1 = of(1, 2, 3, 4, 5, 6);
let final_val = list1.pipe(
  tap(
    (x) => console.log("From tap() = " + x),
    (e) => console.log(e),
    () => console.log("Task complete")
  ),
  filter((a) => a % 2 === 0)
);

final_val.subscribe((x) => console.log("Only Even numbers=" + x));
