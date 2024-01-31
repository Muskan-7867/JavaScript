const jokes = document.getElementById("joke")
const btn = document.getElementById('btn')
const url='https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,explicit&type=single';

let getJoke = ()=>{
fetch(url)
.then((data) => data.json())
.then((item) => {
    jokes.textContent = `${item.joke}`
})
}
btn.addEventListener('click',getJoke)
getJoke();