import { iif, of, interval } from "rxjs";
import { mergeMap } from "rxjs/operators";

let taks1 = iif(
  () => (Math.floor(Math.random() * 10) + 1) % 2 === 0,
  of("Even Case"),
  of("Odd Case")
);
taks1.subscribe((value) => console.log(value));

interval(1000)
  .pipe(
    mergeMap((v) =>
      iif(
        () => (Math.floor(Math.random() * 10) + 1) % 2 === 0,
        of("Even Case"),
        of("Odd Case")
      )
    )
  )
  .subscribe(console.log);
