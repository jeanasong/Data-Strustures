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
      const linkedList = this.hashmap[arrayIndex];
      if (linkedList.head === null) {
        linkedList.addToHead({ key, value });
        return;
      }
      let current = linkedList.head;
      while (current) {
        if (current.data.key === key) {
          current.data = { key, value };
        }
        if (!current.next) {
          current.next = new Node({ key, value });
          break;
        }
        current = current.next;
      }
    }

    // retrieving data

    retrieve(key) {
      const arrayIndex = this.hash(key);
      return this.hashmap[arrayIndex];
    }
    
  }
  
  module.exports = HashMap;

  const glossary = new HashMap(3);
  glossary.assign('semordnilap', 'Words that form different words when reversed');
  console.log(glossary.retrieve('semordnilap'));

  // const employees = new HashMap(3);
  // employees.assign('34-567', 'Mara');
  // console.log(employees.hashmap);

  /* 
  Check your work. Save a new HashMap instance with a size of 3, 
  in a constant myHashMap and use the new .hash() to log the result of hashing the key 'id'. Hash and log 'id' again. 
  Are the logged values the same or are they different?
  */

  // const myHashMap = new HashMap(3);
  // console.log(myHashMap.hash('id'));
  // console.log(myHashMap.hash('id'));