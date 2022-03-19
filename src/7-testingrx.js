import { from } from "rxjs";

let arr = [2, 4, 6, 8, 10];
let test = from(arr);
test.subscribe((x) => console.log(x));
