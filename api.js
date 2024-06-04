const box=document.getElementById("jokes");
const btn=document.getElementById("click");
const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,racist,sexist";
  

// api calling//
 let getJoke = ()=>{
    box.classList.remove("fade");
    fetch(url)

.then(response=>response.json())
.then(item=>{
    box.textContent=
    item.joke|| `${item.setup}......${item.delivery}`;
    box.classList.add("fade");
});
}
// click the btn
  btn.addEventListener("click",getJoke);
  getJoke();