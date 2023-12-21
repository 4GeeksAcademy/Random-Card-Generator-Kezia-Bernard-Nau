/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector(".btn").addEventListener("click", function() {
    generateCard();
  });
};

function generateCard() {
  let suit = ["♦", "♣", "♥", "♠"];

  let number = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "K",
    "Q",
    "J",
    "A"
  ];

  let randomSuit = suit[Math.floor(Math.random() * suit.length)];
  let randomNumber = number[Math.floor(Math.random() * number.length)];

  if (randomSuit === "♦" || randomSuit === "♥") {
    document.querySelector(".top").style.color = "red";
    document.querySelector(".num").style.color = "red";
    document.querySelector(".bottom").style.color = "red";
  } else {
    document.querySelector(".top").style.color = "black";
    document.querySelector(".num").style.color = "black";
    document.querySelector(".bottom").style.color = "black";
  }
  document.querySelector(".top").innerHTML = randomSuit;
  document.querySelector(".num").innerHTML = randomNumber;
  document.querySelector(".bottom").innerHTML = randomSuit;
}
