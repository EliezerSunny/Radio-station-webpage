document.getElementById('upcoming-news').innerHTML = "UPCOMING NEWS";

// Music

var mainAudio = document.querySelector('audio');

function playAudio() {
	// body...
	

	if (mainAudio.paused || mainAudio.stop) {
		mainAudio.play();
	} else {
		mainAudio.pause();
	}
	}

	// Music Ends


	function openNav() {
		// body...
		document.getElementById("mySidenav").style.width = "250px";
		document.getElementById("main").style.marginRight = "250px";
	}

	function closeNav() {
		// body...
		document.getElementById("mySidenav").style.width = "0";
		document.getElementById("main").style.marginRight = "0";
	}



