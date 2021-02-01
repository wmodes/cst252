

function goToRoom(room) {
  // hide all rooms
  $(".room.shown").removeClass("shown")
  // show our selected room
  $("." + room).addClass("shown")
}


$("#goto-room2").click(function(){
  goToRoom("room2");
})
$("#goto-room3").click(function(){
  goToRoom("room3");
})
