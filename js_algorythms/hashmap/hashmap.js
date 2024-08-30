// Hashmap is a data structure that stores key-value pairs and allows for constant-time O(1) insertion, deletion, and lookup. It works by taking the key and applying a hash function to it, which returns an index in an array, the element of that index is called a bucket. The value is then stored in that bucket.

class HashMap {
    constructor() {
      this.buckets = Array(10)
        .fill(null)
        .map(() => []);
      this.keys = this.keys = {};
    }
  
    hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % this.buckets.length;
    }
  
    set(key, value) {
      let index = this.hash(key);
      for (let bucket of this.buckets[index]) {
        if (bucket[0] === key) {
          bucket[1] = value;
          return;
        }
      }
      this.buckets[index].push([key, value]);
      this.keys[key] = value;
    }
  
    get(key) {
      let index = this.hash(key);
      for (let bucket of this.buckets[index]) {
        if (bucket[0] === key) {
          return bucket[1];
        }
      }
      return null;
    }
  
    delete(key) {
      let index = this.hash(key);
      let i = 0;
      for (let bucket of this.buckets[index]) {
        if (bucket[0] === key) {
          this.buckets[index].splice(i, 1);
          delete this.keys[key];
          return;
        }
        i++;
      }
    }
  }
  
  let map = new HashMap();
  map.set("name", "John Smith");
  map.set("age", 30);
  console.log(map.get("name")); // "John Smith"
  console.log(map.get("age")); // 30
  map.delete("name");
  console.log(map.get("name")); // null