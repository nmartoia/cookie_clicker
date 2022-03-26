let score = document.querySelector(".score");
let scorei = 0;
let cookie = document.querySelector("button");
let curseur = document.querySelector(".curshop");
let prixcur = document.querySelector(".prixcurseur");
let prixcuri = 15
let prixgrandmere = document.querySelector(".prixgrandmere");
let prixgrandi = 100
let grandmere = document.querySelector(".grandshop");
let p2 = document.querySelector(".p2");
let p1 = document.querySelector(".p1");
let clickcadence = 10000;
let grandcadence = 1000;
let input = document.querySelector("input")
let give = document.querySelector(".give")
function clickcookie(){
    score.textContent++;
    scorei++;
}
function curseurclick(){
    if(scorei>=prixcuri){
        scorei -=prixcuri;
        score.textContent =scorei;
        prixcur.textContent*=1.1;
        prixcuri*=1.1;
        p1.textContent++;
        prixcur.textContent = Math.round(prixcur.textContent*10)/10;
        score.textContent = Math.round(score.textContent*10)/10;
        setInterval(function(){
        cookie.click();
        }, clickcadence)
    }
    else{
        alert("vous navez pas asser de cookie")
    }
}
function grandmereclick(){
    if(scorei>=prixgrandi){
        scorei -=prixgrandi;
        score.textContent =scorei;
        prixgrandmere.textContent*=1.1;
        prixgrandi*=1.1;
        p2.textContent++;
        prixgrandmere.textContent = Math.round(prixgrandmere.textContent*10)/10;
        score.textContent = Math.round(score.textContent*10)/10;
        setInterval(function(){
        cookie.click();
        }, grandcadence)
    }
    else{
        alert("vous navez pas asser de cookie")
    }
}

function ajouter(){
    score.textContent = input.value;
    scorei = input.value;
}
give.addEventListener("click",ajouter)
cookie.addEventListener("click", clickcookie);
curseur.addEventListener("click",curseurclick);
grandmere.addEventListener("click",grandmereclick);