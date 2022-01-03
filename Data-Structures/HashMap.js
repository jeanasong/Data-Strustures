class HashMap {
    constructor(size = 0) {
      this.hashmap = new Array(size)
        .fill(null);
    }
    hash(key) {
      let hashCode = 0;
      for(let i = 0; i < key.length; i++) {
        hashCode += hashCode + key.charCodeAt(i);
      }
      /* compress the value stored in hashCode by using modular arithmetic 
      to return the remainder of dividing hashCode by the length of the hash map.
      */
      return hashCode % this.hashmap.length;
    }
    
  }
  
  module.exports = HashMap;

  /* 
  Check your work. Save a new HashMap instance with a size of 3, 
  in a constant myHashMap and use the new .hash() to log the result of hashing the key 'id'. Hash and log 'id' again. 
  Are the logged values the same or are they different?
  */

  const myHashMap = new HashMap(3);
  console.log(myHashMap.hash('id'));
  console.log(myHashMap.hash('id'));