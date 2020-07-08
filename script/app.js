//Game values

let min = 1;
	max = 10;
	winningNum = Math.floor(Math.random()*(max-min + 1)) + min;
	guessesLeft = 3;

//UI ELements

const game = document.getElementById("game");
	  minNum = document.getElementById("minNum");
	  maxNum = document.getElementById("maxNum");
	  guessValue = document.getElementById("guessValue");
	  guessInput = document.getElementById("guessInput");
	  message = document.getElementById("message");



//Assign min and max
minNum.textContent = min;
maxNum.textContent = max;

//Play again
game.addEventListener('mousedown',function(e){
	if(e.target.classList.contains('Reload')){
		window.location.reload();
	}
});

guessValue.addEventListener('click',function(){
	let guess = parseInt(guessInput.value);

	//Validate
	if(isNaN(guess) || guess < min || guess > max){
		setMessage(`Please enter a  number between ${min} and ${max}`,'red');
	}

	//Guess if won
	if(guess === winningNum){
		gameOver(`${winningNum} is correct!!!`,'green');
	}else{
		//Wrong number
		guessesLeft -= 1;
		if(guessesLeft === 0){
			//Game over
			guessInput.disabled = true;
			gameOver(`Game over, you lost. The correct number was ${winningNum}`,'red');

		}else{
			guessInput.style.borderColor = 'red';
			guessInput.value = '';
			setMessage(`You are wrong...${guessesLeft} guesses left`,'red');
		}
	}


});


//create setMessage

function setMessage(msg,color){
	message.style.color = color;
	message.textContent = msg;
}

function gameOver(msg,color){
	guessInput.disabled = true;
	guessInput.style.borderColor = color;
	setMessage(msg,color);
	guessValue.value = "Play Again";
	guessValue.className += "Reload"; 
}



