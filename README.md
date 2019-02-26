# Liri

## About

The Language Interpretation and Recognition Interface, or Liri, is a command line node app that takes in parameters and gives you back data. There are currently 4 commands in this CLI app that retrieve data from Spotify for songs, Bands in Town for concerts, and OMDB for movies.

## What it does
 
Use node.js to run this app from the terminal:

![alt text](https://github.com/joshespr/8-Liri/blob/master/gifs/liri.gif)

### Bands in Town
`node liri.js concert-this <insert artist/band name>`

This will show the following information about the artist/band's next event in your terminal/bash window

- Name of the venue

- Venue location

- Date of the Event

![alt text](https://github.com/joshespr/8-Liri/blob/master/gifs/conc.gif)

### Spotify
`node liri.js spotify-this-song <insert song title>`

This will show the following information about the song in your terminal/bash window

- Artist(s)
- The song's name
- A preview link of the song from Spotify
- The album that the song is from

![alt text](https://github.com/joshespr/8-Liri/blob/master/gifs/spot.gif)

### Movies
`node liri.js movie-this <insert movie title>`

This will output the following information to your terminal/bash window:

- Title of the movie.
- Year the movie came out.
- IMDB Rating of the movie.
- Country where the movie was produced.
- Language of the movie.
- Plot of the movie.
- Actors in the movie.
- Rotten Tomatoes Rating.
- Rotten Tomatoes URL.

![alt text](https://github.com/joshespr/8-Liri/blob/master/gifs/mov.gif)

### Do What It Says
`node liri.js do-what-it-says`

Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

Right now it will run `spotify-this-song` for "I Want it That Way,".

![alt text](https://github.com/joshespr/8-Liri/blob/master/gifs/backstreet.gif)

Feel free to change the text in that document to test out the feature for other commands.

## Authors

Joshua Manuel

## License

MIT License