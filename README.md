# Liri BOT Assignment

### Overview

LIRI bot is similar to SIRI, except takes in written commands over verbal commands. More specifically, SIRI is a _Speech_ Interpretation and Recognition Interface, while LIRI is a _Language_ Interpretation and Recognition Interface. With the correct inputs, LIRI bot is able to provide the following information: 

    *Find Concert Venues
    *Find information on Movies
    *Find information on Music

### User Guide

LIRI bot recognizes four commands (inputs); If you are using node, remember to include `node liri.js` before each command. Here are each of the four commands with an explanation: 

* `concert-this`

* `concert-this` allows you to find a venue for an artist or bad. If you wanted to find the next venue for the band One Republic, you would use the following line of code: 
    `node liri.js concert-this one republic` 

    * The result will show you the name of the venue, the location, and the date of the event!

* `spotify-this-song`

    * `spotify-this-song` will allow you to find information, and if available, a preview link of a song you wish to search. Here is an example input:
    `node liri.js spotify-this-song counting stars`

    * The result will yield the artists involved in the song, the name of the song searched, a preview link if available, and the name of the album the sone is found in!

* `movie-this`

    * `movie-this` allows you to pull the information of a searched movie. Here is an example input: 
    `node liri.js movie-this The Lion King`

    * The result will provide a plethora of information over the searched movie, including Movie Name, Release Date, IMDB/Rotten Tomatoe rating, Languages, Actors, and Plot. 

* `do-what-it-says`

    * `do-what-it-says` allows you to pull information from the random.txt file, and will currently run `spotify-this-song` with the search inquiry of "I Want it That Way"

### Technology

Here is a list of the technologies that were used:

* Node.js 
* Javascript
* API
    * Spotify
    * OMDB
    * Bands in Town
* NPM Modues
    * Dotenv
    * Axios
    * Moment
    * Node-Spotify-API

### Development

To create this app, I had to create 4 primary functions that would handle each of the four commands. To run the function, I needed the program to execute each function based on which input was provided in the terminal. This was done with an If/Else If/Else statement. For future development, I plan to incorporate more commands, such as pulling the weather/news, and replace my if statement with a switch statement. 

### Demo Images

Here is a demo of how the app works: 

![venue](https://gph.is/g/apbj3je)
![song blank](https://media.giphy.com/media/SU2eQSiS9tDtzx6oVs/giphy.gif)
![song](https://gph.is/g/apbj3je)
![movies](https://gph.is/g/Zd73vBo)
![dowhatitsays](https://gph.is/g/aQOlmlq)