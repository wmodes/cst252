// 2. This code loads the IFrame Player API code asynchronously.
var playerApiCode = document.createElement('script');
// var playerApiCode = $('<script>');  // xlate to jquery
playerApiCode.src = "https://www.youtube.com/iframe_api";
// playerApiCode.attr("src", "https://www.youtube.com/iframe_api");
// find the first script tag in our doc
var firstScriptTag = document.getElementsByTagName('script')[0];
// var firstScriptTag = $('script')[0];   // xlate to jquery
firstScriptTag.parentNode.insertBefore(playerApiCode, firstScriptTag);
// firstScriptTag.before(playerApiCode);    // xlate to jquery

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'M7lc1UVf-VE',
    playerVars: {
      'playsinline': 1
    },
    // the following are events so the video player api can communicate
    // back to the javascript
    events: {
      // we can define a function to autoplay when ready
      'onReady': onPlayerReady,
      // we can define a function to play the video again
      // (loop) when it ends
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
  // player.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    event.target.playVideo();
  }
}

// here are the functions that allow our JS to control the video api
function stopVideo() {
  player.stopVideo();
}
function pauseVideo() {
  player.pauseVideo();
}
function playVideo() {
  player.playVideo();
}

// set up event listeners for buttons
$("#play").click(playVideo);
$("#pause").click(pauseVideo);
$("#hover").mouseover(playVideo);
$("#hover").mouseout(pauseVideo);
