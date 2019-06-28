window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("index_fade").style.opacity = "0";
  } else {
    document.getElementById("index_fade").style.opacity = "1";
  }
  
  if (document.body.scrollTop > 280 || document.documentElement.scrollTop > 280) {
    document.getElementById("index_stay").style.opacity = "0";
  } else {
    document.getElementById("index_stay").style.opacity = "1";
  }
  
}
