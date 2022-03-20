import { BehaviorSubject } from "rxjs";

const subject = new BehaviorSubject(0);

subject.subscribe({
  next: (v) => console.log(`observer A: ${v}`),
});

subject.subscribe({
  next: (v) => console.log(`observer Z: ${v}`),
});

subject.next(1);
subject.next(5);
subject.next(6);
subject.next(7);
subject.next(2);

subject.subscribe({
  next: (v) => console.log(`observer B: ${v}`),
});

subject.next(3);
