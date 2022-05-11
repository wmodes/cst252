
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

var recipeHTML = `
<div class="print recipe">
  <h2 class="title">${theRecipe.title}</h2>
  <p class="desc">${theRecipe.desc}</p>
  <a href="${thisRecipe.link}" target="_new">Read this recipe</a>
</div>
`
var recipeDiv = $(recipeHTML);

var selector = `input[name=question${questionNumber}]:checked`;
// var answerEl = $(selector);
// var userAnswer = $answerEl.val()
var userAnswer = $(selector).val();
