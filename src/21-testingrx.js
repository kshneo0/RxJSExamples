import { of, forkJoin } from "rxjs";
import { concat } from "rxjs/operators";

let list1 = of(2, 3, 4, 5, 6);
let list2 = of(4, 9, 16, 25, 36);
// let final_val = forkJoin([list1, list2]);
let final_val = forkJoin([list1, list2, list1]);
final_val.subscribe((x) => console.log(x));

// 모든 옵저버블이 완료되면, 마지막에 각각의 값을 방출한다.
// 옵저버블을 병렬로 실행하고자 할 때 사용
