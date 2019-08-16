// select alphabet and its children
let alphabet = document.getElementById("alphabet");

let childrenOfAlphabet = alphabet.children;
//console.log(childrenOfAlphabet);
childrenOfAlphabet[1].style.backgroundColor = "yellow";
counter = 0;

function fiveSeconds() {
    setInterval(function() {
	for(i = 0; i < childrenOfAlphabet.length; i++) {
	    childrenOfAlphabet[counter].style.backgroundColor = "green";
	    childrenOfAlphabet[i].style.opacity = 1;

	    if(i !== counter) {
		//childrenOfAlphabet[i].style.backgroundColor = "white";
		childrenOfAlphabet[i].style.opacity = 0;
	    }
	    
	}
	counter++

	// reset counter
	if(counter === 6) {
	    counter = 0;
	}
	
    }, 5000);
}

fiveSeconds();
