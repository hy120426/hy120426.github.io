var music = document.getElementById("music");
var btn=document.getElementById("switch");
var source=document.querySelector("source");
var currentTime = 0;

music.addEventListener("timeupdate", function() {
  currentTime = music.currentTime;
});

window.addEventListener("load", function() {
  console.log(localStorage);
  var storedTime = localStorage.getItem("currentTime");
  var storedSong = localStorage.getItem("currentsong");
  if (storedSong) {
    music.src = storedSong;
    source.src=storedSong;
  }
  if (storedTime) {
    music.currentTime = parseFloat(storedTime);
  }
  var storetitle = localStorage.getItem("songtitle");
  if (storetitle) {
    document.getElementById("songtitle").textContent=storetitle;
  }
});

window.addEventListener("beforeunload", function() {
  localStorage.setItem("currentTime", currentTime);
  localStorage.setItem("currentsong", source.src);
  localStorage.setItem("songtitle", document.getElementById("songtitle").textContent);
});

var allCards = document.querySelectorAll('.playlist-card');
for(card of allCards){
  card.addEventListener('click', function () {
    if(document.getElementById("songtitle").textContent!=this.getAttribute("title")){
    music.src = this.getAttribute("src");
    source.src=this.getAttribute("src");
    document.getElementById("songtitle").textContent=this.getAttribute("title");
  }
  music.play();
  });
}
