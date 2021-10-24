
//URL = "https://www.boredapi.com/api/activity/"
URL = "https://api.kanye.rest/"
//URL = "https://api.whatdoestrumpthink.com/api/v1/quotes/random"

// attach click action to button
$('#action').click(function(){
    // get data via ajax from numbersapi
    // Using the core $.ajax() method
    $.ajax({
        // The URL for the request (ENDPOINT)
        url: URL,
        // The data to send (will be converted to a query string)
        // data: { id: 123},
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        // dataType : "json",
    })
    // If the request succeeds
    .done(function(data) {
        console.log(data);
        // make our JSON data printable
        var printableData = "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
        // put data in webpage
        // $("#output").append("<p>" + JSON.stringify(data));
        // $("#output").append("<p>Here's what you should do when you are bored: <b>" + data.activity);
        // $("#output").append("<p>President-elect Kanye says: <b>" + data.quote);
        $("#output").append("<p>The most stable smart man in the room says: <b>" + data.message);

    })
});
