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
let timer = document.getElementById("temps");
let imageClicked = null;
let scorePoints = 0;
let items = 0;
let temps = 30;

//timer
function countdown() {
    timer.innerText = temps.toString();
    temps--;
    if (temps === 0) {
        let modal = new divModal();
        modal.windowDiv(" ","30vw","50vh","pink", "Score",
            scorePoints + " points", "2rem","url('/img/modal.jpg");
    }
}
setInterval(countdown, 1000)

//shake array
disney.sort(()=>0.5 - Math.random());

//image game
for(let i=0; i < disney.length; i++) {
    let img = document.createElement("img");
    img.src = "img/" + disney[i];
    img.title = disney[i];
    div[i].appendChild(img);
    img.style.width = "12vw";

    //image front
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

for (let i = 0 ; i < logo.length; i++) {

    //click logo so hidden logo
    logo[i].addEventListener("click", function () {
        logo[i].style.transform = "rotateY(90deg)";
        if(null === imageClicked){
            // first click
            imageClicked = this.parentElement.querySelector('img').title;
            items = i;
        }else{
            // second click
            if(imageClicked === this.parentElement.querySelector('img').title ){
                scorePoints++;
                if (scorePoints === 6) {
                    let modal = new divModal();
                    modal.windowDiv(" ","30vw","50vh","pink", "Score",
                        scorePoints + " points", "2rem","url('/img/modal.jpg");

                }
            }
            else {
                setTimeout(function () {
                    logo[i].style.transform = "rotateY(0deg)";
                    logo[items].style.transform = "rotateY(0deg)";
                },500)
            }
            imageClicked = null;
        }
    });
}





