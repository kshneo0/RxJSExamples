import { fromEvent } from "rxjs";
import { ajax } from "rxjs/ajax";

const div = document.querySelector("div");
const button = document.querySelector("button");

fromEvent(button, "click").subscribe(getPosts, (err) => console.error(err));


function getPosts() {
  
}