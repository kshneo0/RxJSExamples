import { of } from "rxjs";
import { toArray } from "rxjs/operators";

let list1 = of(2, 3, 4, 5, 6);
let final_val = list1.pipe(toArray());
final_val.subscribe((x) => console.log(x));
