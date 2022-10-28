// JavaScript Drum Kit App
{
	// Dette burde ikke være nødvendigt, men knapperne virker ikke hvis den ikke er her
	const playingClass = 'playing',
		crashRide = document.getElementById('crash-ride'),
		hiHatTop = document.getElementById('hihat-top');

	const playSound = e => {
		const keyCode = e.keyCode,
			// Viser hvilken knap der er blevet trykket på
			keyElement = document.querySelector(`div[data-key="${keyCode}"]`);

		if (!keyElement) return;

		// Viser hvilken lyd der skal afspilles
		const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
		audioElement.currentTime = 0;
		audioElement.play();

		keyElement.classList.add(playingClass);
	};



	const removeKeyTransition = e => {
		if (e.propertyName !== 'transform') return;

		e.target.classList.remove(playingClass)
	};

	// Laver en array af alle divs med classen key
	const pianoKeys = Array.from(document.querySelectorAll('.key'));

	//Når en transition er færdig, fjern klassen playing
	pianoKeys.forEach(key => {
		key.addEventListener('transitionend', removeKeyTransition);
	});

	// Når der trykkes på en tast, kald funktionen playSound
	window.addEventListener('keydown', playSound);
}