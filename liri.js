// Add code to read and set any environment variables with the dotenv package
require("dotenv").config();

// Project variables
var command = process.argv[2]; 
var search = process.argv.slice(3).join(" ");
var fs = require("fs");
var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment")
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

// switches for the 4 commands
switch (command) {
    case "concert-this":
        concertThis(search);
        break;

    case "spotify-this-song":
        spotifyThisSong(search);
        break;

    case "movie-this":
        movieThis(search);
        break;

    
    case "do-what-it-says":
        doWhatItSays(search);
        break;
    
    // instructions for first-time users on the command line
    default: console.log(
        "\ntype one of these commands after running liri.js:" +
        "\n- concert-this '<artist/band name>'" +
        "\n- spotify-this-song '<song title>' " +
        "\n- movie-this '<movie title>' " +
        "\n- do-what-it-says " 
        );
}


// command: concert-this
function concertThis(search) {

    var queryURL = "https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp";
    
    // Acquire event data from BiT API via AXIOS
    axios.get(queryURL).then(
        function(response) {

            console.log("\nEvent Venue: " + response.data[0].venue.name);
            console.log("\nVenue Location: " + response.data[0].venue.city);
            console.log("\nDate of Event: " + moment(response.data[0].datetime).format("MM-DD-YYYY"));

        }

    ).catch(bug);

};

// command: spotify-this-song
function spotifyThisSong(search) {

    // use node-spotify-api package 
    spotify.search({ type: 'track', query: search }).then(
        
        function(data) {

            console.log("\nArtist(s): " + data.tracks.items[0].album.artists[0].name);
            console.log("\nTrack: " + data.tracks.items[0].name);
            console.log("\nLink: " + data.tracks.items[0].href);
            console.log("\nAlbum: " + data.tracks.items[0].album.name);

    }).catch(bug);

};

// command: movie-this
function movieThis(search) {

    var queryURL = "http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy";

    // Acquire movie data from OMDB API via AXIOS
    axios.get(queryURL).then(
        function(response) {

            console.log("\nMovie Title: " + response.data.Title);
            console.log("\nRelease year: " + response.data.Year);
            console.log("\nIMDB Rating: " + response.data.imdbRating);
            console.log("\nRotten Tomatoes rating: " + response.data.tomatoRating);
            console.log("\nCountry origin: " + response.data.Country);
            console.log("\nLanguage: " + response.data.Language);
            console.log("\nMovie Plot: " + response.data.Plot);
            console.log("\nCast: " + response.data.Actors);

        }
        
    ).catch(bug);

};

// command: do-what-it-says
function doWhatItSays() {

    // use fs node package to read random.txt
    fs.readFile('random.txt', 'utf8', function(err, dataRaw) {

        // If the code experiences any errors, log it to the console
        if (err) {
          return console.log(err);
        }

        // Split raw data by commas (code readability)
        var data = dataRaw.split(",");
        var rSearch = data[1];
        spotifyThisSong(rSearch);


    });
};


// Create a bug function that thoroughly catches errors
function bug(error) {
    if (error.response) {
      // The request was made but the response received falls out of the range
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Error triggered in request set up
      console.log("Error: ", error.message);
    }
    console.log(error.config);

};
