const songs = [

{
title:"Kahani Suno 2.0",
artist:" Kaifi Khalil , Mr Handsome",
duration:"3:22",
src:"music/song1.mp4",
cover:"images/cover1.jpg"
},

{
title:"Tera Mera Hai pyar Amar",
artist:"Ahmad jahanzib",
duration:"5:16",
src:"music/song2.mp4",
cover:"images/cover2.jpg"
},

{
title:"Sitaare",
artist:"Arijit Singh",
duration:"4:03",
src:"music/song3.mp4",
cover:"images/cover3.jpg"
}

];

const audio=document.getElementById("audio");
const title=document.getElementById("title");
const artist=document.getElementById("artist");
const cover = document.getElementById("cover");

const playBtn=document.getElementById("play");
const nextBtn=document.getElementById("next");
const prevBtn=document.getElementById("prev");

const progress=document.getElementById("progress");
const volume=document.getElementById("volume");

const playlist=document.getElementById("playlist");

let currentSong=0;

// Display Playlist

songs.forEach((song,index)=>{

const row=document.createElement("tr");

row.innerHTML=`
<td>${song.title}</td>
<td>${song.artist}</td>
<td>${song.duration}</td>
`;

row.onclick=function(){

currentSong=index;
loadSong();
audio.play();
playBtn.innerHTML="⏸ Pause";

};

playlist.appendChild(row);

});

// Load Song

function loadSong(){

audio.src=songs[currentSong].src;

title.innerHTML=songs[currentSong].title;

artist.innerHTML=songs[currentSong].artist;
cover.src = songs[currentSong].cover;

}

loadSong();

// Play Pause

playBtn.onclick=function(){

if(audio.paused){

audio.play();

playBtn.innerHTML="⏸ Pause";

}

else{

audio.pause();

playBtn.innerHTML="▶ Play";

}

};

// Next

nextBtn.onclick=function(){

currentSong++;

if(currentSong>=songs.length){

currentSong=0;

}

loadSong();

audio.play();

playBtn.innerHTML="⏸ Pause";

};

// Previous

prevBtn.onclick=function(){

currentSong--;

if(currentSong<0){

currentSong=songs.length-1;

}

loadSong();

audio.play();

playBtn.innerHTML="⏸ Pause";

};

// Progress Bar

audio.addEventListener("timeupdate",function(){

progress.max=audio.duration;

progress.value=audio.currentTime;

});

// Change Song Position

progress.oninput=function(){

audio.currentTime=progress.value;

};

// Volume

volume.oninput=function(){

audio.volume=volume.value;

};

// Auto Next Song

audio.onended=function(){

nextBtn.click();

};