window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("index_fade").style.opacity = "0";
  } else {
    document.getElementById("index_fade").style.opacity = "1";
  }
  
  if (document.body.scrollTop > 330 || document.documentElement.scrollTop > 330) {
    document.getElementById("index_stay").style.opacity = "0";
  } else {
    document.getElementById("index_stay").style.opacity = "1";
  }
  
}
