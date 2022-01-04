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

    /* assign() store the hashed key in a variable arrayIndex
       assign the value to the element at arrayIndex in the hash map
       */
    // Declare a HashMap method called .assign() with the parameters key and value.
    assign(key, value) {
      // Declare a constant called arrayIndex with the value of the hashed and compressed key.
      const arrayIndex = this.hash(key);
      // Assign the value to the element at the index you derived from hashing, arrayIndex.
      this.hashmap[arrayIndex] = value;
    }
    
  }
  
  module.exports = HashMap;

  const employees = new HashMap(3);
  employees.assign('34-567', 'Mara');
  console.log(employees.hashmap);

  /* 
  Check your work. Save a new HashMap instance with a size of 3, 
  in a constant myHashMap and use the new .hash() to log the result of hashing the key 'id'. Hash and log 'id' again. 
  Are the logged values the same or are they different?
  */

  // const myHashMap = new HashMap(3);
  // console.log(myHashMap.hash('id'));
  // console.log(myHashMap.hash('id'));