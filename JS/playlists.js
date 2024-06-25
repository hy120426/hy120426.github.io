var music = document.getElementById("music");
var btn=document.getElementById("switch");
var source=document.querySelector("source");
var currentTime = 0;
var playMode=0;
songlist=[
  "images/Astel.mp3",
  "images/Black_Blade.mp3",
  "images/Elden_Ring.mp3",
  "images/Elden.mp3",
  "images/Fire_Gaint.mp3",
  "images/Fortissax.mp3",
  "images/Godfrey.mp3",
  "images/Godrick.mp3",
  "images/Malenia.mp3",
  "images/Mohg.mp3",
  "images/Omen_king.mp3",
  "images/Placidusax.mp3",
  "images/Regal_Ancestor_Spirit.mp3",
  "images/Rennala.mp3",
  "images/Serpent.mp3",
]
titlelist=[
  "Astel, Naturalborn of the Void",
  "Black Blade",
  "Elden Ring",
  "Beast Elden",
  "Fire Gaint",
  "Lichdragon Fortissax",
  "Godfrey,First Elden Lord",
  "Godrick the Grafted",
  "Malenia,Blade of Miquella",
  "Mohg,Lord of Blood",
  "Omen king",
  "Dragonlord Placidusax",
  "Regal Ancestor Spirit",
  "Rennala,Queen of the Full Moon",
  "Rykard, Lord of Blasphemy",
]
music.onended=function(){
  if(playMode==0){
  music.play();
}
else if(playMode==1){
  var currentTitle=document.getElementById("songtitle").textContent;
  var index=titlelist.indexOf(currentTitle);
  console.log(currentTitle);
  if(index==titlelist.length-1){
    index=0;
  }
  else{index=index+1;}
  console.log(index);
  music.src=songlist[index];
  source.src=songlist[index];
  document.getElementById("songtitle").textContent=titlelist[index];
  music.play();
}
else if(playMode==2){
  index=Math.floor(Math.random()*songlist.length);
  music.src=songlist[index];
  source.src=songlist[index];
  document.getElementById("songtitle").textContent=titlelist[index];
  music.play();
}
}

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
  var storeMode = localStorage.getItem("playMode");
  if(storeMode){
    playMode=parseInt(storeMode);
    if(playMode==0){
      btn.textContent="单曲循环";
    }
    else if(playMode==1){
      btn.textContent="列表循环";
    }
    else if(playMode==2){
      btn.textContent="随机播放";
    }
  }
});

window.addEventListener("beforeunload", function() {
  localStorage.setItem("currentTime", currentTime);
  localStorage.setItem("currentsong", source.src);
  localStorage.setItem("songtitle", document.getElementById("songtitle").textContent);
  this.localStorage.setItem("playMode",playMode);
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
btn.addEventListener("click",function(){
  if(playMode==0){
    playMode=1;
    btn.textContent="列表循环";
  }
  else if(playMode==1){
    playMode=2;
    btn.textContent="随机播放";
  }
  else if(playMode==2){
    playMode=0;
    btn.textContent="单曲循环";
  }
})
