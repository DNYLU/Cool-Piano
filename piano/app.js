// JavaScript Drum Kit App
{
	// Dette burde ikke være nødvendigt, men knapperne virker ikke hvis den ikke er her
	const playingClass = 'playing',
		crashRide = document.getElementById('crash-ride'),
		hiHatTop = document.getElementById('hihat-top');

	const playSound = e => {
		const keyCode = e.keyCode,
			// Finder ud af hvilken knap der er blevet trykket på
			keyElement = document.querySelector(`div[data-key="${keyCode}"]`);

		if (!keyElement) return;

		// Viser hvilken lyd der skal afspilles
		const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
		audioElement.currentTime = 0;
		audioElement.play();

		keyElement.classList.add(playingClass);
	};


	// Fjerner transition når den er færdig
	const removeKeyTransition = e => {
		if (e.propertyName !== 'transform') return;

		e.target.classList.remove(playingClass)
	};

	// Laver en array af alle divs med classen key
	const pianoKeys = Array.from(document.querySelectorAll('.key'));

	// Tilføjer eventlistener til alle divs med classen key
	pianoKeys.forEach(key => {
		key.addEventListener('transitionend', removeKeyTransition);
	});

	// Når der trykkes på en tast, kald funktionen playSound
	window.addEventListener('keydown', playSound);
}


const key = document.getElementById('key');
const note = document.getElementById('note');
//SLET
const history = [];

document.onkeydown = function (e) {
	key.innerHTML = e.key;
	// Nok ikke den smarteste måde, men den viser hvilken node der hører til hvilken knap
	if (e.keyCode == 65) {
		note.innerHTML = "C";
	} else if (e.keyCode == 83) {
		note.innerHTML = "D";
	} else if (e.keyCode == 68) {
		note.innerHTML = "E";
	} else if (e.keyCode == 70) {
		note.innerHTML = "F";
	} else if (e.keyCode == 71) {
		note.innerHTML = "G";
	} else if (e.keyCode == 72) {
		note.innerHTML = "A2";
	} else if (e.keyCode == 74) {
		note.innerHTML = "B2";
	} else if (e.keyCode == 75) {
		note.innerHTML = "C2";
	} else if (e.keyCode == 76) {
		note.innerHTML = "D2";
	} else if (e.keyCode == 186) {
		note.innerHTML = "E2";
	} else if (e.keyCode == 222) {
		note.innerHTML = "F2";
	} else if (e.keyCode == 79) {
		note.innerHTML = "G2";
	} else if (e.keyCode == 80) {
		note.innerHTML = "A3";
	} else if (e.keyCode == 219) {
		note.innerHTML = "B3";
	} else return;

	array.forEach(note => {
		history.push(note);
	});

	//SLET
	console.log(history);

  };