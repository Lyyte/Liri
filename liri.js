require("dotenv").config();

var fs = require("fs");

var keys = require("./keys.js");

var axios = require("axios");

var moment = require("moment");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret,
});


var identifier = process.argv[2]
var action = process.argv[3]

if (identifier === "spotify-this-song") {
    Music(action);
}
else if (identifier === "concert-this") {
    Concerts(action);
}
else {
    console.log("try again")
}

function Music(action) {

    spotify.search(
        {
            type: 'track',
            query: action
        },
        function (err, data) {

            if (err) {
                return console.log("Error: " + err);
            }

            console.log("Artists: ", data.tracks.items[0].album.artists[0].name);
            console.log("Song Name: ", data.tracks.items[0].name)
            console.log("Preview Link: ", data.tracks.items[0].preview_url);
            console.log("Album Name: ", data.tracks.items[0].album.name);
        });
}

function Concerts(action) {

    axios.get("https://rest.bandsintown.com/artists/" + action + "/events?app_id=codingbootcamp")

        .then(function (data) {
            console.log("Venue:", data.data[0].venue.name);
            console.log("Location:", data.data[0].venue.city);
            console.log("Date of the Event:", moment(data.data[0].datetime).format('MM/DD/YYYY'));
        })
        .catch(function (error) {
            console.log(error);
        });
}

