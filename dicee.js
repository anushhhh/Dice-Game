var randomNumber1 = Math.floor((Math.random()*6)) + 1;
var randomDice = "images/dice" + randomNumber1 + ".png";
document.querySelector("img.img1").setAttribute("src", randomDice);

var randomNumber2 = Math.floor((Math.random()*6)) + 1;
var randomDice2 = "images/dice" + randomNumber2 + ".png";
document.querySelector("img.img2").setAttribute("src", randomDice2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "❗ Player 1 Won";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Won ❗";
}
else{
  document.querySelector("h1").innerHTML = "DRAW";
}
