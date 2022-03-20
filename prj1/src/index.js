import { first } from "rxjs";
import { fromEvent } from "rxjs";
import { ajax } from "rxjs/ajax";

const div = document.querySelector("div");
const button = document.querySelector("button");

fromEvent(button, "click").subscribe(getPosts, (err) => console.error(err));

function getPosts() {
  const userId = Math.round(Math.random() * 10);
  ajax(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
  ).subscribe((res) => {
    res && res.response && render(res);
  });
}

function render(res) {
  div.innerHTML = "";
  const posts = res.response;
  for (const post of posts) {
    const article = document.createElement("article");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    h1.textContent = post.title;
    p.textContent = `id:${post.id} user-id:${post.userId}`;
    article.appendChild(h1);
    article.appendChild(p);
    div.appendChild(article);
  }
}
