import { Observable } from "rxjs";

/*
var observer = new Observable(function subscribe(subscriber) {
  subscriber.next("My Observable.");
});
*/

var observer = Observable.create(function subscribe(subscriber) {
  subscriber.next("My Observable.");
});

observer.subscribe((x) => console.log(x));
