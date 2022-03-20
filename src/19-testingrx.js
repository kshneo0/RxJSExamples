import { of } from "rxjs";
import { concat } from "rxjs/operators";

let list1 = of(2, 3, 4, 5, 6);
let list2 = of(4, 9, 16, 25, 36);
//let final_val = list1.pipe(concat(list2));
let final_val = list1.pipe(concat(list2, list1));
final_val.subscribe((x) => console.log(x));
