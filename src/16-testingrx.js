import { of } from "rxjs";
import { first, last } from "rxjs/operators";

let all_nums = of(1, 6, 5, 10, 9, 20, 40);
let final_val = all_nums.pipe(first());
final_val.subscribe((x) => console.log("The first value is = " + x));

final_val = all_nums.pipe(last());
final_val.subscribe((x) => console.log("The last value is = " + x));
