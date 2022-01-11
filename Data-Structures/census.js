// Reviewing and building a fully-functional hash map!

const HashMap = require('./HashMap');

/* Create a constant that stores a hash map, birdCensus. 
Use the hash map data structure to store all bird sightings. 
Give it an array size of 16. */

const birdCensus = new HashMap(16);

/* Assign the following key-value pairs to birdCensus:

Key: 'london', Value: 'Chelsea'
Key: 'monk parakeet', Value: 'Brooklyn College'
Key: 'horned owl', Value: 'Pelham Bay Park' */

birdCensus.assign('london', 'Chelsea');
birdCensus.assign('monk parakeet', 'Brooklyn College');
birdCensus.assign('horned owl', 'Pelham Bay Park');

// Retrieve the location for each of the three birds counted in birdCensus. 
// Log them to the terminal.

console.log(birdCensus.retrieve('mandarin duck'));
console.log(birdCensus.retrieve('monk parakeet'));
console.log(birdCensus.retrieve('horned owl'));