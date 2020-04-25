let scoreP1 = 0;
let scorePC = 0;

function restart() {
	card1 = document.getElementById('cscore-p1');
	card2 = document.getElementById('cscore-pc');
	card1.animate([{ transform: 'rotate(0)' }, { transform: 'rotate(360deg)' }], {
		duration: 300,
	});
	card2.animate([{ transform: 'rotate(0)' }, { transform: 'rotate(360deg)' }], {
		duration: 300,
	});
	scoreP1 = 0;
	scorePC = 0;
	document.getElementById('scoreP1').innerHTML = `${scoreP1}`;
	document.getElementById('scorePC').innerHTML = `${scorePC}`;
}

// ROCK = 1
// PAPER = 2
// SCISSORS = 3
function useRock() {
	checkWinner(1);
}

function usePaper() {
	checkWinner(2);
}

function useScissors() {
	checkWinner(3);
}

function checkWinner(P1) {
	// P1 = 1
	// PC = 2
	winner = null;
	PC = Math.floor(Math.random() * (4 - 1)) + 1;
	if (P1 === PC) {
		winner = 0;
		setAnimation(P1, PC, winner);
	}
	if (P1 === 1 && PC === 2) {
		winner = 2;
		setAnimation(P1, PC, winner);
	}
	if (P1 === 1 && PC === 3) {
		winner = 1;
		setAnimation(P1, PC, winner);
	}
	if (P1 === 2 && PC === 1) {
		winner = 1;
		setAnimation(P1, PC, winner);
	}
	if (P1 === 2 && PC === 3) {
		winner = 2;
		setAnimation(P1, PC, winner);
	}
	if (P1 === 3 && PC === 1) {
		winner = 2;
		setAnimation(P1, PC, winner);
	}
	if (P1 === 3 && PC === 2) {
		winner = 1;
		setAnimation(P1, PC, winner);
	}

	if (winner === 1) scoreP1 += 1;
	if (winner === 2) scorePC += 1;

	document.getElementById('scoreP1').innerHTML = `${scoreP1}`;
	document.getElementById('scorePC').innerHTML = `${scorePC}`;
}

function setAnimation(P1, PC, WINNER) {
	let iconP1 = document.getElementById('assetP1');
	let iconPC = document.getElementById('assetPC');
	let options = ['rock', 'paper', 'scissors'];

	iconP1.setAttribute('class', `fa fa-hand-${options[P1 - 1]}`);
	iconPC.setAttribute('class', `fa fa-hand-${options[PC - 1]}`);

	let keyframeWinner = [
		{ transform: 'scale(1) rotate(0deg)', color: 'rgba(172, 172, 172, 0.842)' },
		{ transform: 'scale(2) rotate(10deg)', color: '#00e686' },
		{ transform: 'scale(1) rotate(0deg)', color: 'rgba(172, 172, 172, 0.842)' },
	];
	let keyframeLoser = [
		{ transform: 'scale(1) rotate(0deg)', color: 'rgba(172, 172, 172, 0.842)' },
		{ transform: 'scale(0.5) rotate(-10deg)', color: '#ec3e64' },
		{ transform: 'scale(1) rotate(0deg)', color: 'rgba(172, 172, 172, 0.842)' },
	];
	let keyframeSame = [
		{ transform: 'scale(1) rotate(0deg)', color: 'rgba(172, 172, 172, 0.842)' },
		{
			transform: 'scale(0.5) rotate(-10deg)',
			color: 'rgba(172, 172, 172, 0.842)',
		},
		{ transform: 'scale(1) rotate(0deg)', color: 'rgba(172, 172, 172, 0.842)' },
	];
	let animation = {
		duration: 400,
		easing: 'cubic-bezier(.38,1.07,.59,.11)',
	};

	if (WINNER === 0) {
		iconP1.animate(keyframeSame, animation);
		iconPC.animate(keyframeSame, animation);
	}
	if (WINNER === 1) {
		iconP1.animate(keyframeWinner, animation);
		iconPC.animate(keyframeLoser, animation);
	}
	if (WINNER === 2) {
		iconP1.animate(keyframeLoser, animation);
		iconPC.animate(keyframeWinner, animation);
	}
}
