// Comment block here
// Author:
// Date:


URL = "https://xkcd.com/info.0.json"

// get data via ajax from numbersapi
// Using the core $.ajax() method
$.ajax({
    // The URL for the request (ENDPOINT)
    url: URL,
    // The data to send (will be converted to a query string)
    data: {
    },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    // dataType : "json",
})
// If the request succeeds
.done(function(data) {
    console.log(data);
    var imageUrl = data.img;
    var title = data.title;
    var alt = data.alt;
    var html = `
      <div id="imageblock">
        <h2>${title}</h2>
        <img src="${imageUrl}" title="${alt}"><br>
        <button id="prev">Previous</button><button id="next">Next</button>
      </div>
    `
    $("#xkcd").append(html);

})





// URL = "https://api.nasa.gov/planetary/apod"
//
// // get data via ajax from numbersapi
// // Using the core $.ajax() method
// $.ajax({
//     // The URL for the request (ENDPOINT)
//     url: URL,
//     // The data to send (will be converted to a query string)
//     data: {
//       api_key: "HfxW4diusQBshk1BFUjCC60o8SFnxjcbdLEsKHRP"
//     },
//     // Whether this is a POST or GET request
//     type: "GET",
//     // The type of data we expect back
//     // dataType : "json",
// })
// // If the request succeeds
// .done(function(data) {
//     console.log(data);
//     // put data in webpage
//     // $("#output").append("<p>" + JSON.stringify(data));
//     // $("#output").append("<p>Here's what you should do when you are bored: <b>" + data.activity);
//     // $("#output").append("<p>President-elect Kanye says: <b>" + data.quote);
//     // $("#output").append("<p>" + JSON.stringify(data));
//     imageUrl = data.url;
//     console.log("URL:", imageUrl);
//     $("#output").append("<div id='apod'><img src='" + imageUrl + "'>");
//     $("#output").append("<div id='date'>" + data.date);
//     $("#output").append("<div id='caption'>" + data.explanation);
//
// })
