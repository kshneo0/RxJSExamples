import {Subject} from 'rxjs'
import { ajax } from "rxjs/ajax";
import {map} from 'rxjs/operators'

/*
let final_val = ajax("https://jsonplaceholder.typicode.com/users").pipe(
  map( u => u.response)
)

let subscribe1 = final_val.subscribe(a => console.log(a))
let subscribe2 = final_val.subscribe(a => console.log(a))
*/

const subject_test = new Subject()

subject_test.subscribe({
  next: v => console.log(v)
})

subject_test.subscribe({
  next: (v) => console.log(v),
});

let final_val = ajax("https://jsonplaceholder.typicode.com/users").pipe(
  map((u) => u.response)
);

let subscriber = final_val.subscribe(subject_test)