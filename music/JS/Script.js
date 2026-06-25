const arr = [
  { "Title": "Gehra Hua", "img": "gehra-Hua.jpg", "song": "Gehra Hua.mp3" },
  { "Title": "2 States", "img": "2-states.jpg", "song": "MastMagan.mp3" },
  { "Title": "Kaise Hua", "img": "KaiseHua.jpg", "song": "Kaise Hua.mp3" }
];

let audio = document.querySelector("#audio");
let img = document.querySelector(".img-box img");
let title = document.querySelector("#songTitle"); 
let btn=document.querySelector("#playpausebtn");
let i = 0;
let range=document.querySelector("#range");

function playPause() {
  if (btn.classList.contains("fa-play")) {
    btn.classList.replace("fa-play", "fa-pause");
    audio.play();
 console.log(audio.currentTime)
console.log(audio.duration)
  } else {
    btn.classList.replace("fa-pause", "fa-play");
    audio.pause();
  }
}

function forward() {
  i++;
  if (i === arr.length) {
    i = 0;
  }
  img.src = "images/" + arr[i].img;
  audio.src = "Song/" + arr[i].song;
  title.textContent = arr[i].Title; // update title
 if(btn.classList.contains("fa-pause")){
  audio.play();
  }
}

function Backward() {
  i--;
  if (i < 0) {
    i = arr.length - 1;
  }
  img.src = "images/" + arr[i].img;
  audio.src = "Song/" + arr[i].song;
  title.textContent = arr[i].Title; 
  if(btn.classList.contains("fa-pause")){
  audio.play();
  }

}
