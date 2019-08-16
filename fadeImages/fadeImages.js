// demonstrates a fade slide show

var myIndex = 0;
carousel();

function carousel() {
    var x = document.getElementById("images");
    var allImages = x.children;

    // hide all images
    for (var i = 0; i < allImages.length; i++) {
	allImages[i].style.display = "none";
    }

    myIndex++;

    // reset loop
    if (myIndex > allImages.length) {
	myIndex = 1;
    }

    allImages[myIndex-1].style.display = "block";
    setTimeout(carousel, 7000);
}
