
var questions = [
  {},
  {},
  {}
]

// hide all the answers
// of create CSS to hide things of class hidden (display:none)
$(".hidden").hide();

// different way where we do anser checking instantly
for(var qnum=0;qnum<questions.length;qnum++){
  $("q" + qnum + " input[type=radio]").click(function(){
    // check results of q2
  })

function whenWeSubmit() {

  for(var qnum=0;qnum<questions.length;qnum++){
    // look at the values chosen
    // compare to the "right" value in object array
    // desice whether right or wrong
    // if wrong show .wrong-answer
    if () {
      $(".q" + qnum + " .wrong-answer").show();
      $(`.q$(qnum) .wrong-answer`).show();)
    }
    // else if right show .right-answer
    else {
      $(".q" + qnum + " .right-answer").show();
    }
  }

}
