import { Observable } from "rxjs";

var observer = Observable.create(function subscribe(subscriber) {
  try {
    subscriber.next("My Observable.");
    subscriber.next({ name: "Alex", surname: "John" });
    subscriber.complete();
  } catch (e) {
    subscriber.error(e);
  }
});

observer.subscribe(
  (x) => console.log(x),
  (e) => console.log(e),
  () => console.log("This Ovserbable is completed")
);
