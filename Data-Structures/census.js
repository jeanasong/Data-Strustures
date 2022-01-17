// Reviewing and building a fully-functional hash map!

const HashMap = require('./HashMap');

/* Create a constant that stores a hash map, birdCensus. 
Use the hash map data structure to store all bird sightings. 
Give it an array size of 16. */

const birdCensus = new HashMap(16);

/* Assign the following key-value pairs to birdCensus:

Key: 'drogba', Value: 'Chelsea'
Key: 'cameroon', Value: 'Africa'
Key: 'premier league', Value: 'England' 
Key: 'chelsea legend', Value: 'Drogba' */

birdCensus.assign('drogba', 'Chelsea');
birdCensus.assign('cameroon', 'Africa');
birdCensus.assign('premier league', 'England');
birdCensus.assign('chelsea legend', 'Drogba');

// Retrieve the location for each of the three birds counted in birdCensus. 
// Log them to the terminal.

console.log(birdCensus.retrieve('drogba'));
console.log(birdCensus.retrieve('cameroon'));
console.log(birdCensus.retrieve('premier league'));
console.log(birdCensus.retrieve('chelsea legend'));