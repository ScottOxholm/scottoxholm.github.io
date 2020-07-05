function menu(){
    if(document.getElementsByClassName('navigation')[1].style.visibility==`hidden`){
      document.getElementsByClassName('navigation')[0].style="font-style: italic; text-decoration: white; font-size: 40px;";
  
      document.getElementsByClassName('navigation')[1].style.visibility="visible";
      document.getElementsByClassName('navigation')[2].style.visibility=`visible`;
      document.getElementsByClassName('navigation')[3].style.visibility=`visible`;
      document.getElementsByClassName('navigation')[4].style.visibility=`visible`;
    }
    else{
      document.getElementsByClassName('navigation')[0].style="font-style: normal; text-decoration: white; font-size: 40px;";
  
      document.getElementsByClassName('navigation')[1].style.visibility=`hidden`;
      document.getElementsByClassName('navigation')[2].style.visibility=`hidden`;
      document.getElementsByClassName('navigation')[3].style.visibility=`hidden`;
      document.getElementsByClassName('navigation')[4].style.visibility=`hidden`;
    }
  }
  
  
  
  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {topScroll()};
  
  // Get the navbar
  var navbar = document.getElementById("menu");
  
  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;
  
  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function topScroll() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }
  
  function timedReveal(){
    setTimeout(function(){document.getElementsByClassName("logo")[0].style.opacity="1"},6000);
    setTimeout(function(){document.getElementsByClassName("logo")[1].style.opacity="1"},11000);
    setTimeout(function(){document.getElementsByClassName("logo")[2].style.opacity="1"},12000);
    setTimeout(function(){document.getElementsByClassName("logo")[3].style.opacity="1"},18000);
  }
  
  
  
  function copy() {
    var copyText = document.getElementById("email");
    copyText.style.display="block";
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert(copyText.value+" was copied! Let's connect!");
    copyText.style.display="none";
  }