let disney = [
    "/img/anna.jpg",
    "/img/elsa1.jpg",
    "/img/jasmine.jpg",
    "/img/pinochio.jpg",
    "/img/pocahontas.jpg",
    "/img/raiponce.jpg",
    "/img/anna.jpg",
    "/img/elsa1.jpg",
    "/img/jasmine.jpg",
    "/img/pinochio.jpg",
    "/img/pocahontas.jpg",
    "/img/raiponce.jpg"
]

let div = document.querySelectorAll("div");

//shake array
disney.sort(()=>0.5 - Math.random());

//image game
for(let i=0; i < disney.length; i++) {
    let img = document.createElement("img");
    img.src = disney[i];
    div[i].appendChild(img);
    img.style.width = "12vw";

//image recto
    let logo = document.createElement("img");
    logo.src = "img/log_disney.jpg";
    logo.className = "front";
    div[i].appendChild(logo)
    logo.style.width = "12vw";
    logo.style.position = "absolute";
    logo.style.top = "0";
    logo.style.left = "0";
}

//create class logo and img
let logo = document.getElementsByClassName("front");
let img = document.getElementsByClassName("back");

for (let i = 0 ; i < logo.length; i++) {
    //click logo so hidden logo
    logo[i].addEventListener("click", function () {
        logo[i].style.visibility = "hidden";
    })
    img[i].addEventListener("click", function () {

    })
}
