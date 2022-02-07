

// <audio id="sad-music" src="media/sad-trumpets.wav"></audio>

$("#sad-music").trigger("play");
$("#happy-music").trigger("play");


responses = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful."
]

responses = [
  {"text": "It is certain.",
   "mood": 1},
  {"text": "It is decidedly so.",
   "mood": 1},
  {"text": "Without a doubt.",
   "mood": 1},
  {"text": "Yes definitely.",
   "mood": 1},
  {"text": "You may rely on it.",
   "mood": 1},
  {"text": "As I see it, yes.",
   "mood": 1},
  {"text": "Most likely.",
   "mood": 1},
  {"text": "Outlook good.",
   "mood": 1},
  {"text": "Yes.",
   "mood": 1},
  {"text": "Signs point to yes.",
   "mood": 1},
  {"text": "Reply hazy, try again.",
   "mood": 0},
  {"text": "Ask again later.",
   "mood": 0},
  {"text": "Better not tell you now.",
   "mood": 0},
  {"text": "Cannot predict now.",
   "mood": 0},
  {"text": "Concentrate and ask again.",
   "mood": 0},
  {"text": "Don't count on it.",
   "mood": -1},
  {"text": "My reply is no.",
   "mood": -1},
  {"text": "My sources say no.",
   "mood": -1},
  {"text": "Outlook not so good.",
   "mood": -1},
  {"text": "Very doubtful.",
   "mood": -1},
]

// BEFORE
// select 8-ball output
index = Math.round(Math.random()*responses.length)
output = responses[index]
// output it
$("#output").html(output)

// AFTER
// select 8-ball output
index = Math.round(Math.random()*responses.length)
output = responses[index]
// output it
$("#output").html(output.text)
if (output.mood == 1) {

}
