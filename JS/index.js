
var allCards = document.querySelectorAll('.playlist-card');
var music = document.getElementById("music");
var btn=document.getElementById("playpause");
var source=document.querySelector("source");
var currentTime = 0;
// var isplay=music.paused;
  //console.log(isplay);
for(card of allCards){
  card.addEventListener('click', function () {
    location.href = this.getAttribute("id")+'.html';
    window.localStorage.setItem("currentsong", source.src);
    window.localStorage.setItem("currentTime", currentTime);
    //window.localStorage.setItem("isplay", isplay);
    window.localStorage.setItem("songtitle", document.getElementById("songtitle").textContent);
})}

  // 监听音乐播放事件
  music.addEventListener("timeupdate", function() {
    currentTime = music.currentTime;
  });

  // 监听页面离开事件
  window.addEventListener("beforeunload", function() {
    localStorage.setItem("currentTime", currentTime);
    localStorage.setItem("currentsong", source.src);
    localStorage.setItem("songtitle", document.getElementById("songtitle").textContent);
    //localStorage.setItem("isplay", music.paused);
  });

  // 监听页面加载事件
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
  // if(localStorage.getItem("isplay")=="false"){
  //   music.play();}
  });
//   btn.addEventListener("click",function(){
//     if(music.paused){
//       music.play();
//       btn.textContent="暂停"
//   }
//   else{
//     music.pause();
//     btn.textContent="播放"
//   }
// });
