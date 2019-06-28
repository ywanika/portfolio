window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    
  document.getElementById("index_stay").style.opacity = 1 - (document.documentElement.scrollTop - 150) / 170;
  
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("index_fade").style.opacity = "0";
  } else {
    document.getElementById("index_fade").style.opacity = "1";
  }

}

/*window.scroll=function(){
    ("#index_stay").css("opacity", 1 - window.scrollTop() / 280);
  };*/
