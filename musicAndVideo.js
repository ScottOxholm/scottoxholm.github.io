var video = document.getElementsByClassName("video"); 

var playOpen=false;
function playOpening(){
  if(playOpen){
    video[0].pause();
    playOpen=false;
  } 
  else{
    video[0].play();
    playOpen=true;
  }
}

var playClose=false;
function playClosing(vid){
  if(playClose){
    video[1].pause();
    playClose=false;
  } 
  else{
    video[1].play();
    playClose=true;
  }
}


//only one song should play at a time
//when a different song is selected the first song will be paused
var songs = document.getElementsByClassName("music"); 
var play1 = false;
var play2 = false;
var play3 = false;
var play4 = false;

function playOne() { 
  if(play1){
    pause();
  }
  else{
  play1=true;
  play2=false;
  play3=false;
  play4 = false;
  songs[1].pause();
  songs[2].pause();
  songs[3].pause();
  songs[0].play(); 
  }
} 

function playTwo() { 
  if(play2){
    pause();
  }
  else{
  play2=true;
  play1=false;
  play3=false;
  play4 = false;
  songs[0].pause();
  songs[2].pause();
  songs[3].pause();
  songs[1].play();
  }  
} 
function playThree() { 
  if(play3){
    pause();
  }
  else{
  play3=true;
  play2=false;
  play1=false;
  play4 = false;
  songs[0].pause();
  songs[1].pause();
  songs[3].pause();
  songs[2].play(); 
  } 
} 

function playFour() { 
  if(play4){
    pause();
  }
  else{
  play4=true;
  play2=false;
  play1=false;
  play3 = false;
  songs[0].pause();
  songs[1].pause();
  songs[2].pause();
  songs[3].play(); 
  } 
} 

function pause() { 
  songs[1].pause();
  songs[2].pause();
  songs[0].pause();
  songs[3].pause();
  play1=false;
  play2=false;
  play3=false;
  play4 = false; 
} 

//I wanted to the text colour to change to reflect what song is being played 
//only one should be black at a time


function changeColor(button, i, j, k){
  document.getElementsByClassName("button button7")[i].style.color="white";
  document.getElementsByClassName("button button7")[j].style.color="white";
  document.getElementsByClassName("button button7")[k].style.color="white";
  
  //if you click a new button the old one should change to white and the new one should be black
  //if you click the same button for a second time it should go back to black
  button.style.color = (button.style.color == "white") ? "black" : "white";
}