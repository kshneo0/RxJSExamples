import { from } from "rxjs";
import { reduce } from "rxjs/operators";

const items = [
  { item1: "A", price: 1000.0 },
  { item1: "B", price: 850.0 },
  { item1: "C", price: 200.0 },
  { item1: "D", price: 1500.0 },
];

let final_val = from(items).pipe(reduce((acc, itemsdet) => acc+itemsdet.price,0));
final_val.subscribe(x => console.log("Total Price is: " + x))