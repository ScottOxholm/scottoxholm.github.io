// Get the <span> element that closes the modal
var exit = document.getElementsByClassName("close")[0];
var Rarrow = document.getElementsByClassName("arrow right")[0];
var Larrow = document.getElementsByClassName("arrow left")[0];

// When the user clicks on <span> (x), close the modal
exit.onclick = function() { 
  modal.style.display = "none";
}
var i=0;
Rarrow.onclick = function() { 
  if (i==19){
    Rarrow.style.display="none"
  }
  else{
    i++;
    Larrow.style.display="block"
    img = document.getElementsByClassName("pictures")[i];
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
    title.innerHTML = img.title;
  }
}
Larrow.onclick = function() { 
  if (i==0){
    Larrow.style.display="none"
  }
  else{
    i--;
    Rarrow.style.display="block"
    img = document.getElementsByClassName("pictures")[i];
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
    title.innerHTML = img.title;
  }
}

// Get the modal
var modal = document.getElementById("myModal");
var i = 0;
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var title = document.getElementById("title");

//Define a function that generates the modal using "alt" as caption and "title" as the title
function draw(index, img){
  i=index;
  console.log(i);
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
  title.innerHTML = img.title;
}

function showAll(){
  for(var j=0; j<20; j++){
    document.getElementsByClassName("pictures")[j].style.display="block";
    document.getElementsByClassName("hover")[j].style.visibility="visible";
  }
}

hideAll();

function hideAll(){
  for(var j=0; j<20; j++){
    document.getElementsByClassName("pictures")[j].style.display="none";
    document.getElementsByClassName("hover")[j].style.visibility="hidden";
  }
}

function showHide(j) {
  var x = document.getElementsByClassName("pictures")[j];
  var x1 = document.getElementsByClassName("pictures")[j+1];
  var x2 = document.getElementsByClassName("pictures")[j+2];
  var x3 = document.getElementsByClassName("pictures")[j+3];
  var y = document.getElementsByClassName("hover")[j];
  var y1 = document.getElementsByClassName("hover")[j+1];
  var y2 = document.getElementsByClassName("hover")[j+2];
  var y3 = document.getElementsByClassName("hover")[j+3];
  if (x.style.display == "none") {
    x.style.display = "block";
    x1.style.display = "block";
    x2.style.display = "block";
	  x3.style.display = "block";
    y.style.visibility = "visible";
    y1.style.visibility = "visible";
    y2.style.visibility = "visible";
	  y3.style.visibility = "visible";
  } else {
    x.style.display = "none";
    x1.style.display = "none";
    x2.style.display = "none";
	  x3.style.display = "none";
    y.style.visibility = "hidden";
    y1.style.visibility = "hidden";
    y2.style.visibility = "hidden";
	  y3.style.visibility = "hidden";
  }
}


// Get the image and call it to be drawn when clicked
//////////////////////////////////////ALL IMAGES/////////////////////////////////////////////////////


var img0 = document.getElementsByClassName("pictures")[0];
img0.onclick= function(){
  Larrow.style.display="none";
  Rarrow.style.display="block";
  draw(0,img0);
}

var img1 = document.getElementsByClassName("pictures")[1];
img1.onclick = function(){
  draw(1,img1);
}

var img2 = document.getElementsByClassName("pictures")[2];
img2.onclick = function(){
  draw(2,img2);
}

var img3 = document.getElementsByClassName("pictures")[3];
img3.onclick = function(){
  draw(3,img3);
}

var img4 = document.getElementsByClassName("pictures")[4];
img4.onclick = function(){
  draw(4,img4);
}

var img5 = document.getElementsByClassName("pictures")[5];
img5.onclick = function(){
  draw(5,img5);
}

var img6 = document.getElementsByClassName("pictures")[6];
img6.onclick = function(){
  draw(6,img6);
}

var img7 = document.getElementsByClassName("pictures")[7];
img7.onclick = function(){
  draw(7,img7);
}

var img8 = document.getElementsByClassName("pictures")[8];
img8.onclick = function(){
  draw(8,img8);
}

var img9 = document.getElementsByClassName("pictures")[9];
img9.onclick = function(){
  draw(9,img9);
}

var img10 = document.getElementsByClassName("pictures")[10];
img10.onclick = function(){
  draw(10,img10);
}

var img11 = document.getElementsByClassName("pictures")[11];
img11.onclick = function(){
  draw(11,img11);
}

var img12 = document.getElementsByClassName("pictures")[12];
img12.onclick = function(){
  draw(12,img12);
}

var img13 = document.getElementsByClassName("pictures")[13];
img13.onclick = function(){
  draw(13,img13);
}

var img14 = document.getElementsByClassName("pictures")[14];
img14.onclick = function(){
  draw(14,img14);
}

var img15 = document.getElementsByClassName("pictures")[15];
img15.onclick = function(){
  draw(15,img15);
}

var img16 = document.getElementsByClassName("pictures")[16];
img16.onclick = function(){
  draw(16,img16);
}

var img17 = document.getElementsByClassName("pictures")[17];
img17.onclick = function(){
  draw(17,img17);
}

var img18 = document.getElementsByClassName("pictures")[18];
img18.onclick = function(){
  draw(18,img18);
}

var img19 = document.getElementsByClassName("pictures")[19];
img19.onclick = function(){
  Rarrow.style.display="none";
  Larrow.style.display="block";
  draw(19,img19);
}


var h0 = document.getElementsByClassName("hover")[0];
 h0.onclick= function(){
  Larrow.style.display="none";
  Rarrow.style.display="block";
  draw(0,img0);
}

var h1 = document.getElementsByClassName("hover")[1];
 h1.onclick = function(){
  draw(1,img1);
}

var h2 = document.getElementsByClassName("hover")[2];
 h2.onclick = function(){
  draw(2, img2);
}

var h3 = document.getElementsByClassName("hover")[3];
h3.onclick = function(){
  draw(3,img3);
}

var h4 = document.getElementsByClassName("hover")[4];
h4.onclick = function(){
  draw(4,img4);
}

var h5 = document.getElementsByClassName("hover")[5];
h5.onclick = function(){
  draw(5,img5);
}

var h6 = document.getElementsByClassName("hover")[6];
h6.onclick = function(){
  draw(6,img6);
}

var h7 = document.getElementsByClassName("hover")[7];
h7.onclick = function(){
  draw(7,img7);
}

var h8 = document.getElementsByClassName("hover")[8];
h8.onclick = function(){
  draw(8,img8);
}

var h9 = document.getElementsByClassName("hover")[9];
h9.onclick = function(){
  draw(9,img9);
}

var h10 = document.getElementsByClassName("hover")[10];
h10.onclick = function(){
  draw(10,img10);
}

var h11 = document.getElementsByClassName("hover")[11];
h11.onclick = function(){
  draw(11,img11);
}

var h12 = document.getElementsByClassName("hover")[12];
h12.onclick = function(){
  draw(12,img12);
}

var h13 = document.getElementsByClassName("hover")[13];
h13.onclick = function(){
  draw(13,img13);
}

var h14 = document.getElementsByClassName("hover")[14];
h14.onclick = function(){
  draw(14,img14);
}

var h15 = document.getElementsByClassName("hover")[15];
h15.onclick = function(){
  draw(15,img15);
}

var h16 = document.getElementsByClassName("hover")[16];
h16.onclick = function(){
  draw(16,img16);
}

var h17 = document.getElementsByClassName("hover")[17];
h17.onclick = function(){
  draw(17,img17);
}

var h18 = document.getElementsByClassName("hover")[18];
h18.onclick = function(){
  draw(18,img18);
}

var h19 = document.getElementsByClassName("hover")[19];
h19.onclick = function(){
  Rarrow.style.display="none";
  Larrow.style.display="block";
  draw(19,img19);
}