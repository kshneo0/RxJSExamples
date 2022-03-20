import { of } from "rxjs";
import { count } from "rxjs/operators";
/*
let all_nums = of(1, 7, 5, 10, 10, 20);
let final_val = all_nums.pipe(count());
final_val.subscribe((x) => console.log("The count is " + x));
*/

let all_nums = of(1, 6, 5, 10, 9, 20, 40);
let final_val = all_nums.pipe(count((a) => a % 2 === 0));
final_val.subscribe((x) => console.log("The count is " + x));
