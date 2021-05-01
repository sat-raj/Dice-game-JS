var randomNumber1;
randomNumber1=Math.floor(Math.random()*6)+1;
var s= "images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",s);
var randomNumber2;
randomNumber2=Math.floor(Math.random()*6)+1;
var s1="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",s1);
if(randomNumber1>=randomNumber2)
document.querySelector("h1").innerHTML="Player 1 Wins🚩";
else
document.querySelector("h1").innerHTML="Player 2 Wins🚩";
