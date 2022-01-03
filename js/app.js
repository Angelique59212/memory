let disney = [
    "anna.jpg",
    "elsa1.jpg",
    "jasmine.jpg",
    "pinochio.jpg",
    "pocahontas.jpg",
    "raiponce.jpg",
    "anna.jpg",
    "elsa1.jpg",
    "jasmine.jpg",
    "pinochio.jpg",
    "pocahontas.jpg",
    "raiponce.jpg"
]

let div = document.querySelectorAll("div");
let score = document.getElementById("score");
let imageClicked = null;
let scorePoints = 0;
let items = 0;

//shake array
disney.sort(()=>0.5 - Math.random());

//image game
for(let i=0; i < disney.length; i++) {
    let img = document.createElement("img");
    img.src = "/img/" + disney[i];
    img.title = disney[i];
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
        if(null === imageClicked){
            // first click
            imageClicked = this.parentElement.querySelector('img').title;
            items = i;
        }else{
            // second click
            if(imageClicked === this.parentElement.querySelector('img').title ){
                scorePoints++;
                score.innerHTML = "Votre score est de " + scorePoints + "points";
            }
            else {
                setTimeout(function () {
                    logo[i].style.visibility = "visible";
                    logo[items].style.visibility = "visible";
                },1000)
            }
            imageClicked = null;
        }
    });
}
