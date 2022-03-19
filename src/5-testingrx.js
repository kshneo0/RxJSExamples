import { of } from "rxjs";
import { reduce, filter } from "rxjs/operators";

let testingObservable = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
let observable = testingObservable.pipe(
  filter((x) => x % 2 === 0),
  reduce((acc, current) => acc + current, 0)
);

observable.subscribe((x) => console.log(x));
