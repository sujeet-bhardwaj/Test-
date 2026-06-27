
const arr = [
  { "Title": "Gehra Hua", "img": "gehra-Hua.jpg", "song": "Gehra Hua.mp3" },
  { "Title": "2 States", "img": "2-states.jpg", "song": "MastMagan.mp3" },
  { "Title": "Kaise Hua", "img": "KaiseHua.jpg", "song": "Kaise Hua.mp3" },
  { "Title": "Ishq Jalakar", "img": "Dhurandhar.jpg", "song": "Ishq Jalakar.mp3" }
];


let audio = document.querySelector("#audio");
let img = document.querySelector(".img-box img");
let title = document.querySelector("#songTitle"); 
let btn=document.querySelector("#playpausebtn");
let start=document.querySelector("#start");
let end=document.querySelector("#end");
let shuffle=document.querySelector("#shuffle");
let repeat=document.querySelector("#repeat");

let i = 0;
let range=document.querySelector("#range");

audio.ontimeupdate = () => {
  range.value = Math.floor(audio.currentTime);
  start.textContent=formatTime(range.value);
if (audio.currentTime >= audio.duration) {
  if(repeat.classList.contains("active")){
    audio.currentTime=0;
    if(btn.classList.contains("fa-pause")){
  audio.play();
  }
  }
  else{
    forward();
  }
  }
};
range.oninput = () => {
  audio.currentTime =range.value;
};

function formatTime(value){
let min = Math.floor(value / 60);
let sec = Math.floor(value % 60);
return `${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`;

}
audio.onloadedmetadata = () => {
  range.max = Math.floor(audio.duration);
  end.textContent = formatTime(audio.duration);
};

function playPause() {
  if (btn.classList.contains("fa-play")) {
  btn.classList.replace("fa-play", "fa-pause");
  audio.play();
  } else {
    btn.classList.replace("fa-pause", "fa-play");
    audio.pause();
  }
}

function forward() {
 if(shuffle.classList.contains("active")){
  i=Math.floor(Math.random()*arr.length);
 }
else{
  i++;
}
  if (i === arr.length) {
    i = 0;
  }
  img.src = "images/" + arr[i].img;
  audio.src = "Song/" + arr[i].song;
  title.textContent = arr[i].Title; 
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

let featureBtn = document.querySelector(".fetaure-btn");
featureBtn.addEventListener("click", function(evt) {
  if (evt.target.tagName === "I") {
    evt.target.classList.toggle("active");
  }
});
