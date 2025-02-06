let newCopiedObj = {};

const copy = (obj, parentKeyColl = []) => {
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object") {
      Object.defineProperty(newCopiedObj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: {},
      });
      parentKeyColl.push(key)
      copy(obj[key], parentKeyColl);
    } else {
      if (parentKeyColl.length) {
        const howManyParentKeys = parentKeyColl.length; // eg 4
        //level base
        console.log(parentKeyColl);
        if (howManyParentKeys === 1) {
          newCopiedObj[parentKeyColl[0]][key] = value;
        } else if (howManyParentKeys === 2) {
          newCopiedObj[parentKeyColl[0]][parentKeyColl[1]][key] = value;
        }else if (howManyParentKeys === 3) {
          newCopiedObj[parentKeyColl[0]][parentKeyColl[1]][parentKeyColl[2]][key] = value;
        }
      } else {
        newCopiedObj[key] = value;
      }
    }
  }

  return newCopiedObj;
};

let testObj = {
  name: "az",
  age: 33,
  football: {
    play: false,
    watch: {
      daily: false,
      weekend: true
    },
  },
  after: false,
  basketball: {
    play: false,
    watch: true,
  },
  testFn: () => {
    console.log('test');
  },
  und: undefined
};

// let newCopiedObj1 = copy(testObj);
// console.log(newCopiedObj1);

console.log(Object.keys(testObj));