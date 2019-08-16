// javascript for videoOverlay

// change blue car on click

// get blue car
let blueCar = document.getElementById("blueCar");
let video = document.getElementsByTagName("iframe");
video[0].addEventListener("click", videoClicked);

function videoClicked() {
    // create new overlay and append
    //blueCar.style.border = "1px solid red";
    console.log("clicked");
    blueCar.style.display = "none";

    // get video container
    changeContainer();
    
    
}

function changeContainer() {
    //let container = document.getElementById("container");
    let videoEnclosure = document.getElementById("videoEnclosure");
    videoEnclosure.style.width = "100%";

    let closeImage = document.getElementById("close");
    closeImage.style.display = "block";
}
