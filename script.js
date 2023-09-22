
var images = [ 
    "dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png", 
];

var numbers = images.length; 

//Para elegir la imagen del primer dado de manera aleatoria

randomNumber1 = Math.floor(Math.random () * numbers);
var oneImage = images [randomNumber1];

var firstDiceeImage = "images/" + oneImage;
document.querySelector("img.img1").setAttribute('src', firstDiceeImage );


//Para elegir la imagen del segundo dado de manera aleatoria
randomNumber2 = Math.floor(Math.random () * numbers);
var twoImage = images [randomNumber2];

console.log(randomNumber1)
console.log(randomNumber2)

var secondDiceeImage = "images/" + twoImage;
document.querySelector("img.img2").setAttribute('src', secondDiceeImage );

// Para definir la condicion

if (randomNumber1 > randomNumber2) {
document.querySelector("h1").innerHTML=('Player 1 Wins! 🔥🎉');
  }


if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML=('Player 2 Wins! 🔥🎉');
}

if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML=('Draw! 😜👯‍♂️🥊');
} 

/*
Otra solucion valida para la parte de selecionar una foto para el primer dado:

var randomNumber =  Math.random () * 6;
    randomNumber = Math.floor(randomNumber) +1


var firstDiceeImage = "/images/dice" + randomNumber + ".png";
document.querySelector("img.img1").setAttribute('src', firstDiceeImage );*/
