import { of, merge } from "rxjs";
import { concat } from "rxjs/operators";

let list1 = of(2, 3, 4, 5, 6);
let list2 = of(4, 9, 16, 25, 36);
//let final_val = merge(list1, list2);
let final_val = merge(list1, list2, list2, list1);
final_val.subscribe((x) => console.log(x));
