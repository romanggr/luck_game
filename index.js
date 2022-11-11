var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImageSource)


var randomNumber2 =  Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber2 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImageSource)

var winner=document.querySelector('h1')

    if (randomNumber1>randomNumber2){
        winner.innerHTML=('player 1 win')
}
    else if (randomNumber1<randomNumber2){
        winner.innerHTML=('player 2 win')
}
    else{
        winner.innerHTML=('draw ')
    }
