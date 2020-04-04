require("dotenv").config();

var fs = require("fs");

var keys = require("./keys.js");

var axios = require("axios");

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
else {
    console.log("try again")
}

function Music(action) {

    if (action === " ") {
        action === "Solo";
    }
    else {
        action === action
    }

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
