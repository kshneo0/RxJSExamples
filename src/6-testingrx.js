import { ajax } from "rxjs/ajax";
import { map, retry } from "rxjs/operators";

let final_val = ajax("https://jsonplaceholder.typicode.com/users").pipe(
  map((e) => e.response)
);

final_val.subscribe((x) => console.log(x));
