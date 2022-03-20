import { fromEvent } from "rxjs";

let id = 1;

function addItem(item) {
  let li = document.createElement("li");
  li.id = "li" + id;
  let textNode = document.createTextNode(item);
  let btn = document.createElement("button");
  btn.innerHTML = "X";
  btn.id = id;

  li.appendChild(textNode);
  li.appendChild(btn);
  list.insertBefore(li, list.firstChild);
  id++;
}

fromEvent(add, "click").subscribe((e) => {
  addItem(input.value);
  input.value = "";
});
