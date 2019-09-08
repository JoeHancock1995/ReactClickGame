import React, { component } from "react";
import CardImages from '../card/CardImages';
import card from '../card/index';
import images from '../../images.json';

class Game extends component {
    state ={
        images,
        score:0,
        topScore:0
    };

componentDidMount () {
    this.setState(
        images: this.randomizeCards(this.state.images)
 )
};



//UNIT 4 GAME USE FOR REFERENCE. NOT REACT CODE
//var wins = 0;
// var losses = 0;
// var userScore = 0;
// function getCardNumber () {
//     return (Math.floor(Math.random() * 12 + 1));
// }

// var minimum = 19;
// var maximum = 120;
// var randomNumber;
// function getRandomNumber () {
//     return (Math.floor(Math.random() * (maximum - minimum + 1) ) + minimum);
// }

// var emperorCard;
// var priestessCard;
// var magicianCard;
// var strengthCard;
// var cardArray = [];

// function setWins() {
//     $("#win-count").append(wins);
// }

// function setLosses () {
//     $("#loss-count").append(losses);
// }

// function setRandomNumber () {
//     randomNumber = getRandomNumber();
//     $("#randomNumber").append(randomNumber);
// }

// function setTotalScore() {
//     userScore = 0;
//     $("#totalScore").append(userScore);
// }

// function setCardNumber() {
//     emperorCard = getCardNumber();
//     priestessCard = getCardNumber();
//     magicianCard = getCardNumber();
//     strengthCard = getCardNumber();
//     $("#emperorText").append(emperorCard);
//     $("#priestessText").append(priestessCard);
//     $("#magicianText").append(magicianCard);
//     $("#strengthText").append(strengthCard);
//     cardArray.push(emperorCard, priestessCard, magicianCard, strengthCard);
//     console.log(cardArray);

//         for (var iterator = 0; iterator > cardArray.length; iterator++) {
//             if (cardArray.indexOf(iterator)) {
//                 console.log(true);
//                 $("#emperorText, #priestessText, magicianText, #strengthText").empty();
//                 setCardNumber();
//             }
//             else {
//                 console.log(false);
//             }
//         }
//     }


// function hideNumbers() {
//     $("#emperorText").css("display", "none");
//     $("#priestessText").css("display", "none");
//     $("#magicianText").css("display", "none");
//     $("#strengthText").css("display", "none");
// }

// function showEmperor () {
//     $("#emperorText").css("display", "none");
// }

// function showPriestess () {
//     $("#priestessText").css("display", "none");
// }

// function showMagician () {
//     $("#magicianText").css("display", "none");
// }

// function showStrength () {
//     $("#strengthText").css("display", "none");
// }

// function reset() {
//     $("#totalScore").empty();
//     $("#randomNumber").empty();
//     $("#emperorText, #priestessText, #magicianText, strengthText").empty();
//     cardArray = [];
//     setRandomNumber();
//     setTotalScore();
//     setCardNumber();
//     hideNumbers();
// }

// $(".button").one("click", function startGame () {
//     setWins();
//     setLosses();
//     setRandomNumber();
//     setTotalScore();
//     setCardNumber();
//     hideNumbers();
// });

// $("#emperorCard").click(function () {
//     showEmperor();
//     userScore = userScore + emperorCard;
//     console.log("Current score: " + userScore);
//     $('#totalScore').text(userScore);
//         if (userScore === randomNumber) {
//             wins++;
//             $("#win-count").text(wins);
//             alert("You win!");
//             reset();
//         } else if (userScore > randomNumber) {
//             losses++;
//             $("#loss-count").text(losses);
//             alert("You lose");
//             reset();
//         }
// });

// $("#priestessCard").click(function () {
//     showPriestess();
//     userScore = userScore + priestessCard;
//     console.log("Current score:" + userScore);
//     $('#totalScore').text(userScore);
//         if (userScore === randomNumber) {
//             wins++;
//             $("#win-count").text(wins);
//             alert("You win!");
//             reset();
//         } else if (userScore > randomNumber) {
//             losses++;
//             $("#loss-count").text(losses);
//             alert("You lose");
//             reset();
//         }
// });

// $("#magicianCard").click(function () {
//     showMagician();
//     userScore = userScore + magicianCard;
//     console.log("Current score: " + userScore);
//     $('#totalScore').text(userScore);
//         if (userScore === randomNumber) {
//             wins++;
//             $("#win-count").text(wins);
//             alert("You win!");
//             reset();
//         } else if (userScore > randomNumber) {
//             losses++;
//             $("#loss-count").text(losses);
//             alert("You lose");
//             reset();
//         }
// });

// $("#strengthCard").click(function () {
//     showStrength();
//     userScore = userScore + strengthCard;
//     console.log("Current score: " + userScore);
//     $('#totalScore').text(userScore);
//         if (userScore === randomNumber) {
//             wins++;
//             $("#wins").text(wins);
//             alert("You win!");
//             reset();
//         } else if (userScore > randomNumber) {
//             losses++;
//             $("#loss-count").text(losses);
//             alert("You lose");
//             reset();
//         }
// });