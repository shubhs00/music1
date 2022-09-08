let songIndex = 0;
let audioElement = new Audio('2002.mp3',);
let playMe = document.getElementById("playMe");
let progress = document.getElementById("myProgressBar");
let songItem = Array.from(document.getElementsByClassName("songItem"));
let gif = document.getElementById("gif")


let songs = [

{songsLists:"have you ever been in love", filePath:'music/love.mp3', coverPath:"music/screenshot (48).png"},
{songsLists:"[Songs.PK] Dukki Tikki", filePath:'music/balma.mp3', coverPath:"music/screenshot (48).png"},
{songsLists:"[Songs.PK] Aashiqui 2 Chahun Main Ya Naa", filePath:'music/1.mp3', coverPath:"music/screenshot (48).png"},
{songsLists:"01 - Singham", filePath:'music/2002.mp3', coverPath:"music/screenshot (48).png"},
{songsLists:"have you ever been in love", filePath:'music/2.mp3', coverPath:"music/screenshot (48).png"},
{songsLists:"have you ever been in love", filePath:'music/3.mp3', coverPath:"music/screenshot (48).png"},
{songsLists:"have you ever been in love", filePath:'music/4.mp3', coverPath:"music/screenshot (48).png"},
{songsLists:"have you ever been in love", filePath:'music/5.mp3', coverPath:"music/screenshot (48).png"}

]






// })
// playMe.addEventListener("click",() =>{
//  if(audioElement.paused || audioElement.currentTime<=0){ 
//  audioElement.play();
//  playMe.classList.remove("fa-play-circle");
//  playMe.classList.add("fa-pause-circle");

// }else{
//     audioElement.pause();
//     playMe.classList.remove("fa-pause-cicle");
//     playMe.classList.add("fa-play-circle")

// }
// })


let btnplay = ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
      audioElement.play();
   playMe.classList.remove("fa-play-circle");
   playMe.classList.add("fa-pause-circle")
   gif.style.opacity = 1;
   
   

    }else{
      audioElement.pause();
        playMe.classList.remove("fa-pause-circle")
        playMe.classList.add("fa-play-circle")
        gif.style.opacity = 0;
    }

}

myProgressBar.addEventListener("change",()=>{
  audioElement.currentTime = myProgressBar.value * audioElement.duration/100
})



// const makeAllPlays = ()=>{
//   Array.from(document.getElementsByClassName("playsong")).forEach(element => {
//     element.src.remove="icons/pause8.png"
    
//     element.classList.add("icons/play-button.png")
   
//   });
// }

const makeAllPlays = () =>{
  Array.from(document.getElementsByClassName("playsong")).forEach(element => {
       element.target.classList.remove('fa-sharp fa-solid fa-pause')
       element.target.classList.add('fa-sharp fa-solid fa-play')
})
}





 Array.from(document.getElementsByClassName("playsong")).forEach(element => {
   element.addEventListener("click",(e)=>{
    
    makeAllPlays();
    index = parseInt(e.target.id)
      e.target.classList.remove('fa-sharp fa-solid fa-play');
      e.target.classList.add('fa-sharp fa-solid fa-pause');
      audioElement.src =`music/${index+1}.mp3`

      audioElement.currentTime = 0;
      audioElement.play()

    
    
  })
  
  

})


songItem.forEach((element, i) => {
  console.log(i);
  element.getElementsByTagName("img")[1].src = songs[i].coverPath
  element.getElementsByClassName();
  })




// very Important
// if(audioElement.paused){
//   console.log(e);
//   audioElement.play()
//   // e.target.classList.remove("icons/play-button.png")
//   e.target.src="icons/pause8.png"
// } else{
//  audioElement.pause()
//  e.target.src="icons/play-button.png"


