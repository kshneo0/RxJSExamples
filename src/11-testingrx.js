import { of } from "rxjs";
import { max, min } from "rxjs/operators";

let all_nums = of(1, 6, 15, 10, 58, 20, 40);
let final_val = all_nums.pipe(max());
final_val.subscribe((x) => console.log("The Max value is " + x));

final_val = of(1, 6, 15, 10, 58, 2, 40).pipe(min());
final_val.subscribe((x) => console.log("The Min value is " + x));
