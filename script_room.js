/* I finished the show right and wrong sequences to show the user that they either correctly inputed the sequence or didn't

I want to figure out how to check for the order of the buttons. I've done all of the easy stuff, now I have to handle the tough code of "ordering"
the buttons.

Here's a link: https://stackoverflow.com/questions/28462094/make-javascript-detect-buttons-that-are-pressed-in-a-certain-order

Here's a second link: https://stackoverflow.com/questions/21267243/making-an-onscreen-numeric-keyboard

store elements in item, array or list

Case switch statement --> essentially use a variable to change the script run, will it work?

example = switch (a), then at the end of all of the cases, a += 1

I'm thinking of using setAttribute instead of switch, it seems like it might work better:

https://www.w3schools.com/jsref/met_element_setattribute.asp

How to make things temporarily unclickable:

https://eloquentjavascript.net/15_event.html#c_srTkrKlkl+

Checking Arrays to check code, here's a link for that:

https://gomakethings.com/check-if-two-arrays-or-objects-are-equal-with-javascript/

*/

// Setting up Ids (I did this after I made most of my functions, I'll just leave them as is

three.addEventListener("click", showSequenceOne);

one = document.getElementById("one");
two = document.getElementById("two");
three = document.getElementById("three");
four = document.getElementById("four");
five = document.getElementById("five");
six = document.getElementById("six");
seven = document.getElementById("seven");
eight = document.getElementById("eight");
nine = document.getElementById("nine");
ten = document.getElementById("ten");

var launchFlashing = setInterval(toggleLaunchWhite, 250);

var correct_sequence_code_one = ["one","six","four","seven","nine"]
var correct_sequence_code_two = ["nine","seven","four","one","six","two","five"]
var correct_sequence_code_three = ["eight","four","seven","one","five","nine","six","two","ten"]
var correct_sequence_code_three_advanced = ["one","two","four","five","six","seven","eight","nine","ten"]

// 8,4,7,1,5,9,6,2,10

var user_sequence = [];

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

/*

Used like so
var arr = [2, 11, 37, 42];
arr = shuffle(arr);
console.log(arr);

*/

function displayRandom(){
}

function win() {
	alert("Ship Activated. Protocol Initiated.")
	document.location.href = "https://kryptolax.github.io/Congrats/"
}

function arraysLengthEqual(arr1, arr2) {
	if (arr1.length !== arr2.length) {
			return false;
  } else {
			return true;
  }
}

function arraysCasesEqualNotWorking(arr1, arr2) {
		console.log("is running");
		if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
			console.log("is running 2")
				if(arr1[i] !== arr2[i])
            return false;
    }
    return true;
}

function arraysCasesEqual(x, y) {
   var objectsAreSame = true;
   for(var propertyName in x) {
      if(x[propertyName] !== y[propertyName]) {
         objectsAreSame = false;
         break;
      }
   }
   return objectsAreSame;
}

var phase = 1;

function userInput(el) {
	if (three.classList.contains("show_sequence_again")) {
		el.classList.remove('clickable');
		el.classList.add('clicked');
		a = el.getAttribute('id');
		user_sequence.push(a);
		console.log("Pushed " + a);
		switch (phase) {
			case 1:
				if (arraysLengthEqual(correct_sequence_code_one, user_sequence) == true) {
					console.log("Correct Length");
						if (arraysCasesEqual(correct_sequence_code_one, user_sequence) == true ) {
								console.log("Correct Sequence");
								three.classList.remove('show_sequence_again');
								three.removeEventListener("click", showSequenceOne);
								showRight();
								setTimeout(showSequenceTwo, 1000);
								phase++;
						} else {
								console.log("Incorrect Sequence")
								three.classList.remove('show_sequence_again');
								three.removeEventListener("click", showSequenceOne);
								showWrong();
								setTimeout(showSequenceOne, 1000);
						}
					} else {
					}
				break;
			case 2:
				if (arraysLengthEqual(correct_sequence_code_two, user_sequence) == true) {
					console.log("Correct Length");
						if (arraysCasesEqual(correct_sequence_code_two, user_sequence) == true ) {
								console.log("Correct Sequence");
								three.classList.remove('show_sequence_again');
								three.removeEventListener("click", showSequenceTwo);
								showRight();
								setTimeout(showSequenceThree, 1000);
								phase++;
						} else {
								console.log("Incorrect Sequence")
								three.classList.remove('show_sequence_again');
								three.removeEventListener("click", showSequenceTwo);
								showWrong();
								setTimeout(showSequenceTwo, 1000);
						}
					} else {
					}
				break;
			case 3:
				if (arraysLengthEqual(correct_sequence_code_three, user_sequence) == true) {
					console.log("Correct Length");
						if (arraysCasesEqual(correct_sequence_code_three, user_sequence) == true ) {
								console.log("Correct Sequence");
								three.classList.remove('show_sequence_again');
								three.removeEventListener("click", showSequenceThree);
								showRight();
								setTimeout(win, 1000);
						} else {
								console.log("Incorrect Sequence")
								three.classList.remove('show_sequence_again');
								three.removeEventListener("click", showSequenceThree);
								showWrong();
								setTimeout(showSequenceThree, 1000);
						}
					} else {
					}
				break;
		}
	} else {
		// Do Nothing
	}
}

function userInputWorks(el) {
	if (three.classList.contains("show_sequence_again")) {
		var phase = 1;
		el.classList.remove('clickable');
		el.classList.add('clicked');
		a = el.getAttribute('id');
		user_sequence.push(a);
		console.log("Pushed " + a);
			if (arraysLengthEqual(correct_sequence_code_one, user_sequence) == true) {
				console.log("Right Length");
					if (arraysCasesEqual(correct_sequence_code_one, user_sequence) == true ){
						if (phase == 1) {
							console.log("Right Sequence.");
							three.classList.remove('show_sequence_again');
							three.removeEventListener("click", showSequenceOne);
							showRight();
							setTimeout(showSequenceTwo, 1000);
							phase++;
						} else if (phase == 2) {
							console.log("Right Sequence.");
							three.classList.remove('show_sequence_again');
							three.removeEventListener("click", showSequenceTwo);
							showRight();
						}
					} else {
						console.log("Incorrect Sequence.")
						three.classList.remove('show_sequence_again');
						three.removeEventListener("click", showSequenceOne);
						showWrong();
						setTimeout(showSequenceOne, 1000);
					}
		} else {
				console.log("Waiting");
		}
	} else {
		//Do Nothing
	}
}

// Starting the Sequence, have a blinking white light to start the launch

function toggleLaunchWhite() {
	three.classList.toggle('launch');
}

function beginLaunch() {
	launchFlashing;
}

function showSequenceAgain() {
	three.classList.add('show_sequence_again');
}
/*

Below are functions that actually show the sequence. It shows the order of the sequence.


Also, I added an event listener instead of an onclick so I can remove it temporarily while the function is running

*/



function waitSequenceOne() {
	three.addEventListener("click", showSequenceOne);
}

function waitSequenceTwo() {
	three.addEventListener("click", showSequenceTwo);
}

function waitSequenceThree() {
	three.addEventListener("click", showSequenceThree);
}

function userInputAdd() {
	one.addEventLisener("click", userInput(this));
}

function removeClicked() {
	one.classList.remove('clicked');
	two.classList.remove('clicked');
	four.classList.remove('clicked');
	five.classList.remove('clicked');
	six.classList.remove('clicked');
	seven.classList.remove('clicked');
	eight.classList.remove('clicked');
	nine.classList.remove('clicked');
	ten.classList.remove('clicked');
}

function showSequenceOne() {
	removeClicked();
	user_sequence = [];
	three.classList.remove('show_sequence_again');
	hideClickable();
	three.removeEventListener("click", showSequenceOne);
	clearInterval(launchFlashing);
	three.classList.remove('launch');
	three.classList.remove('start');
	flashOne();
	setTimeout(flashSix, 1000);
	setTimeout(flashFour, 2000);
	setTimeout(flashSeven, 3000);
	setTimeout(flashNine, 4000);
	setTimeout(waitSequenceOne, 5000);
	setTimeout(showClickable, 5000);
	setTimeout(showSequenceAgain, 5000);
}


function showSequenceTwo(){
	removeClicked();
	user_sequence = [];
	three.classList.remove('show_sequence_again')
	hideClickable();
	three.removeEventListener("click", showSequenceTwo);
	flashNineFaster();
	setTimeout(flashSevenFaster, 750);
	setTimeout(flashFourFaster, 1500);
	setTimeout(flashOneFaster, 2250);
	setTimeout(flashSixFaster, 3000);
	setTimeout(flashTwoFaster, 3750);
	setTimeout(flashFiveFaster, 4500);
	setTimeout(waitSequenceTwo, 5250);
	setTimeout(showClickable, 5250);
	setTimeout(showSequenceAgain, 5250);
}



function showSequenceThree(){
	removeClicked();
	user_sequence = [];
	hideClickable();
	three.classList.remove('show_sequence_again');
	three.removeEventListener("click", showSequenceThree);
	flashEightFastest();
	setTimeout(flashFourFastest, 500);
	setTimeout(flashSevenFastest, 1000);
	setTimeout(flashOneFastest, 1500);
	setTimeout(flashFiveFastest, 2000);
	setTimeout(flashNineFastest, 2500);
	setTimeout(flashSixFastest, 3000);
	setTimeout(flashTwoFastest, 3500);
	setTimeout(flashTenFastest, 4000);
	setTimeout(waitSequenceThree, 4500);
	setTimeout(showClickable, 4500);
	setTimeout(showSequenceAgain, 4500);
}



function showSequenceThreeAdvanced(){
	removeClicked();
	user_sequence = [];
	hideClickable();
	three.removeEventListener("click", showSequenceThree);
	shuffled = shuffle(correct_sequence_code_three_advanced);
}

// Below, these functions show the user when they are right or wrong based on the User Input.

function showWrong() {
	removeClicked();
	hideClickable();
	wrongFlashOne();
	wrongFlashTwo();
	wrongFlashThree();
	wrongFlashFour();
	wrongFlashFive();
	wrongFlashSix();
	wrongFlashSeven();
	wrongFlashEight();
	wrongFlashNine();
	wrongFlashTen();
}

function showRight() {
	removeClicked();
	hideClickable();
	rightFlashOne();
	rightFlashTwo();
	rightFlashThree();
	rightFlashFour();
	rightFlashFive();
	rightFlashSix();
	rightFlashSeven();
	rightFlashEight();
	rightFlashNine();
	rightFlashTen();
}

function playSound() {
	// when the JACKPOT! button is clicked, play the slot machine sound
	document.getElementById('you-win').play();
}








































// This shows the user that once the sequence is done, the consoles (divs) are now clickable

function showClickable() {
	one.classList.add('clickable');
	two.classList.add('clickable');
	four.classList.add('clickable');
	five.classList.add('clickable');
	six.classList.add('clickable');
	seven.classList.add('clickable');
	eight.classList.add('clickable');
	nine.classList.add('clickable');
	ten.classList.add('clickable');
}

// This shows the user that the divs are no longer clickable

function hideClickable() {
	one.classList.remove('clickable');
	two.classList.remove('clickable');
	four.classList.remove('clickable');
	five.classList.remove('clickable');
	six.classList.remove('clickable');
	seven.classList.remove('clickable');
	eight.classList.remove('clickable');
	nine.classList.remove('clickable');
	ten.classList.remove('clickable');
}

// The functions below shows the user when the sequence they entered is wrong

function wrongBlinkOne() {
	one.classList.toggle('wrong')
}

function wrongFlashOne() {
	one.classList.toggle('wrong')
	setTimeout(wrongBlinkOne, 250)
	setTimeout(wrongBlinkOne, 500)
	setTimeout(wrongBlinkOne, 750)
}





function wrongBlinkTwo() {
	two.classList.toggle('wrong')
}

function wrongFlashTwo() {
	two.classList.toggle('wrong')
	setTimeout(wrongBlinkTwo, 250)
	setTimeout(wrongBlinkTwo, 500)
	setTimeout(wrongBlinkTwo, 750)
}





function wrongBlinkThree() {
	three.classList.toggle('wrong')
}

function wrongFlashThree() {
	three.classList.toggle('wrong')
	setTimeout(wrongBlinkThree, 250)
	setTimeout(wrongBlinkThree, 500)
	setTimeout(wrongBlinkThree, 750)
}





function wrongBlinkFour() {
	four.classList.toggle('wrong')
}

function wrongFlashFour() {
	four.classList.toggle('wrong')
	setTimeout(wrongBlinkFour, 250)
	setTimeout(wrongBlinkFour, 500)
	setTimeout(wrongBlinkFour, 750)
}





function wrongBlinkFive() {
	five.classList.toggle('wrong')
}

function wrongFlashFive() {
	five.classList.toggle('wrong')
	setTimeout(wrongBlinkFive, 250)
	setTimeout(wrongBlinkFive, 500)
	setTimeout(wrongBlinkFive, 750)
}





function wrongBlinkSix() {
	six.classList.toggle('wrong')
}

function wrongFlashSix() {
	six.classList.toggle('wrong')
	setTimeout(wrongBlinkSix, 250)
	setTimeout(wrongBlinkSix, 500)
	setTimeout(wrongBlinkSix, 750)
}





function wrongBlinkSeven() {
	seven.classList.toggle('wrong')
}

function wrongFlashSeven() {
	seven.classList.toggle('wrong')
	setTimeout(wrongBlinkSeven, 250)
	setTimeout(wrongBlinkSeven, 500)
	setTimeout(wrongBlinkSeven, 750)
}





function wrongBlinkEight() {
	eight.classList.toggle('wrong')
}

function wrongFlashEight() {
	eight.classList.toggle('wrong')
	setTimeout(wrongBlinkEight, 250)
	setTimeout(wrongBlinkEight, 500)
	setTimeout(wrongBlinkEight, 750)
}





function wrongBlinkNine() {
	nine.classList.toggle('wrong')
}

function wrongFlashNine() {
	nine.classList.toggle('wrong')
	setTimeout(wrongBlinkNine, 250)
	setTimeout(wrongBlinkNine, 500)
	setTimeout(wrongBlinkNine, 750)
}





function wrongBlinkTen() {
	ten.classList.toggle('wrong')
}

function wrongFlashTen() {
	ten.classList.toggle('wrong')
	setTimeout(wrongBlinkTen, 250)
	setTimeout(wrongBlinkTen, 500)
	setTimeout(wrongBlinkTen, 750)
}



// The functions below shows the user when the sequence they entered is RIGHT



function rightBlinkOne() {
	one.classList.toggle('right')
}

function rightFlashOne() {
	one.classList.toggle('right')
	setTimeout(rightBlinkOne, 250)
	setTimeout(rightBlinkOne, 500)
	setTimeout(rightBlinkOne, 750)
}





function rightBlinkTwo() {
	two.classList.toggle('right')
}

function rightFlashTwo() {
	two.classList.toggle('right')
	setTimeout(rightBlinkTwo, 250)
	setTimeout(rightBlinkTwo, 500)
	setTimeout(rightBlinkTwo, 750)
}





function rightBlinkThree() {
	three.classList.toggle('right')
}

function rightFlashThree() {
	three.classList.toggle('right')
	setTimeout(rightBlinkThree, 250)
	setTimeout(rightBlinkThree, 500)
	setTimeout(rightBlinkThree, 750)
}





function rightBlinkFour() {
	four.classList.toggle('right')
}

function rightFlashFour() {
	four.classList.toggle('right')
	setTimeout(rightBlinkFour, 250)
	setTimeout(rightBlinkFour, 500)
	setTimeout(rightBlinkFour, 750)
}





function rightBlinkFive() {
	five.classList.toggle('right')
}

function rightFlashFive() {
	five.classList.toggle('right')
	setTimeout(rightBlinkFive, 250)
	setTimeout(rightBlinkFive, 500)
	setTimeout(rightBlinkFive, 750)
}





function rightBlinkSix() {
	six.classList.toggle('right')
}

function rightFlashSix() {
	six.classList.toggle('right')
	setTimeout(rightBlinkSix, 250)
	setTimeout(rightBlinkSix, 500)
	setTimeout(rightBlinkSix, 750)
}





function rightBlinkSeven() {
	seven.classList.toggle('right')
}

function rightFlashSeven() {
	seven.classList.toggle('right')
	setTimeout(rightBlinkSeven, 250)
	setTimeout(rightBlinkSeven, 500)
	setTimeout(rightBlinkSeven, 750)
}





function rightBlinkEight() {
	eight.classList.toggle('right')
}

function rightFlashEight() {
	eight.classList.toggle('right')
	setTimeout(rightBlinkEight, 250)
	setTimeout(rightBlinkEight, 500)
	setTimeout(rightBlinkEight, 750)
}





function rightBlinkNine() {
	nine.classList.toggle('right')
}

function rightFlashNine() {
	nine.classList.toggle('right')
	setTimeout(rightBlinkNine, 250)
	setTimeout(rightBlinkNine, 500)
	setTimeout(rightBlinkNine, 750)
}





function rightBlinkTen() {
	ten.classList.toggle('right')
}

function rightFlashTen() {
	ten.classList.toggle('right')
	setTimeout(rightBlinkTen, 250)
	setTimeout(rightBlinkTen, 500)
	setTimeout(rightBlinkTen, 750)
}

// Below are just functions that are essentially helping show the sequence.
// They flash certain pieces in color to indicate the the order that they need to be selected in.



function blinkOne(){
	document.getElementById("one").classList.toggle('highlighted');
}

function flashOne(){
	document.getElementById("one").classList.toggle('highlighted');
	setTimeout(blinkOne, 1000);
}

function flashOneFaster(){
	document.getElementById("one").classList.toggle('highlighted');
	setTimeout(blinkOne, 750);
}

function flashOneFastest(){
	document.getElementById("one").classList.toggle('highlighted');
	setTimeout(blinkOne, 500);
}



function blinkTwo(){
	document.getElementById("two").classList.toggle('highlighted');
}

function flashTwo(){
	document.getElementById("two").classList.toggle('highlighted');
	setTimeout(blinkTwo, 1000);
}

function flashTwoFaster(){
	document.getElementById("two").classList.toggle('highlighted');
	setTimeout(blinkTwo, 750);
}

function flashTwoFastest(){
	document.getElementById("two").classList.toggle('highlighted');
	setTimeout(blinkTwo, 500);
}



function blinkFour(){
	document.getElementById("four").classList.toggle('highlighted');
}

function flashFour(){
	document.getElementById("four").classList.toggle('highlighted');
	setTimeout(blinkFour, 1000);
}

function flashFourFaster(){
	document.getElementById("four").classList.toggle('highlighted');
	setTimeout(blinkFour, 750);
}

function flashFourFastest(){
	document.getElementById("four").classList.toggle('highlighted');
	setTimeout(blinkFour, 500);
}



function blinkFive(){
	document.getElementById("five").classList.toggle('highlighted');
}

function flashFive(){
	document.getElementById("five").classList.toggle('highlighted');
	setTimeout(blinkFive, 1000);
}

function flashFiveFaster(){
	document.getElementById("five").classList.toggle('highlighted');
	setTimeout(blinkFive, 750);
}

function flashFiveFastest(){
	document.getElementById("five").classList.toggle('highlighted');
	setTimeout(blinkFive, 500);
}



function blinkSix(){
	document.getElementById("six").classList.toggle('highlighted');
}

function flashSix(){
	document.getElementById("six").classList.toggle('highlighted');
	setTimeout(blinkSix, 1000);
}

function flashSixFaster(){
	document.getElementById("six").classList.toggle('highlighted');
	setTimeout(blinkSix, 750);
}

function flashSixFastest(){
	document.getElementById("six").classList.toggle('highlighted');
	setTimeout(blinkSix, 500);
}



function blinkSeven(){
	document.getElementById("seven").classList.toggle('highlighted');
}

function flashSeven(){
	document.getElementById("seven").classList.toggle('highlighted');
	setTimeout(blinkSeven, 1000);
}

function flashSevenFaster(){
	document.getElementById("seven").classList.toggle('highlighted');
	setTimeout(blinkSeven, 750);
}

function flashSevenFastest(){
	document.getElementById("seven").classList.toggle('highlighted');
	setTimeout(blinkSeven, 500);
}



function blinkEight(){
	document.getElementById("eight").classList.toggle('highlighted');
}

function flashEight(){
	document.getElementById("eight").classList.toggle('highlighted');
	setTimeout(blinkEight, 1000);
}

function flashEightFaster(){
	document.getElementById("eight").classList.toggle('highlighted');
	setTimeout(blinkEight, 750);
}

function flashEightFastest(){
	document.getElementById("eight").classList.toggle('highlighted');
	setTimeout(blinkEight, 500);
}



function blinkNine(){
	document.getElementById("nine").classList.toggle('highlighted');
}

function flashNine(){
	document.getElementById("nine").classList.toggle('highlighted');
	setTimeout(blinkNine, 1000);
}

function flashNineFaster(){
	document.getElementById("nine").classList.toggle('highlighted');
	setTimeout(blinkNine, 750);
}

function flashNineFastest(){
	document.getElementById("nine").classList.toggle('highlighted');
	setTimeout(blinkNine, 500);
}



function blinkTen(){
	document.getElementById("ten").classList.toggle('highlighted');
}

function flashTen(){
	document.getElementById("ten").classList.toggle('highlighted');
	setTimeout(blinkTen, 1000);
}

function flashTenFaster(){
	document.getElementById("ten").classList.toggle('highlighted');
	setTimeout(blinkTen, 750);
}

function flashTenFastest(){
	document.getElementById("ten").classList.toggle('highlighted');
	setTimeout(blinkTen, 500);
}
