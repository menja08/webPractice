

  var tag = document.createElement('script');
  tag.id = 'iframe-demo';
  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('existing-iframe-example', {
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
    });
  }
  function onPlayerReady(event) {
    document.getElementById('existing-iframe-example').style.borderColor = '#FF6D00';
  }
  function changeBorderColor(playerStatus) {
    var color;
    if (playerStatus == -1) {
	color = "750px";//"#37474F"; // unstarted = gray
    } else if (playerStatus == 0) {
	color = "650px";//"#FFFF00"; // ended = yellow
    } else if (playerStatus == 1) {
	color = "600px";//"#33691E"; // playing = green
    } else if (playerStatus == 2) {
	color = "550px";//"#DD2C00"; // paused = red
    } else if (playerStatus == 3) {
	color = "500px";//"#AA00FF"; // buffering = purple
    } else if (playerStatus == 5) {
	color = "450px";//"#FF6DOO"; // video cued = orange
    }
    if (color) {
	//document.getElementById('existing-iframe-example').style.borderColor = color;
	document.getElementById('existing-iframe-example').style.width = color;
    }
  }
  function onPlayerStateChange(event) {
    changeBorderColor(event.data);
  }
