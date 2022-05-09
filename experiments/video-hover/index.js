
$(".box1").mouseover(function(){
  // start Video
  $(".box1 video").trigger("play");
})

$(".box1").mouseout(function(){
  // start Video
  $(".box1 video").trigger("pause");
})

$(".box1").click(function(){
  // go to link1
  $('html, body').animate({
    scrollTop: $("#link1").offset().top
}, 2000);
})
