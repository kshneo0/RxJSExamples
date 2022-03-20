import { Subject } from "rxjs";

let subject_test = new Subject();
/*
subject_test.subscribe({
  next: (v) => console.log(`This is from first observer ${v}`),
});

subject_test.subscribe({
  next: (v) => console.log(`This is from second observer ${v}`),
});

subject_test.next("A");
subject_test.complete();
subject_test.next("B");
*/

subject_test.subscribe({
  error: (e) => console.log(`This is from first observer ${e}`),
});

subject_test.subscribe({
  error: (e) => console.log(`This is from second observer ${e}`),
});

subject_test.error(new Error("There is an error"));
