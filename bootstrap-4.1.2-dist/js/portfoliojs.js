window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.documentElement.scrollTop != 0){
        var x = document.documentElement.scrollTop
    } else{
        var x = document.body.scrollTop
    }

    document.getElementById("index_stay").style.opacity = 1 - (x - 150) / 170;

    document.getElementById("index_fade").style.opacity = 1 - (x-20) / 50;

}

/*window.scroll=function(){
    ("#index_stay").css("opacity", 1 - window.scrollTop() / 280);
  };*/
