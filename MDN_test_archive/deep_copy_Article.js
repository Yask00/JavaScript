function deepCopy(obj) {
  const result = {};

  if (
    typeof obj !== "object" ||
    typeof obj === undefined ||
    obj === null ||
    Array.isArray(obj) || //  It doesn't work if you have an array of objects
    typeof obj === "function"
  ) {
    return obj;
  }

  const keys = Object.keys(obj);

  for (const key in keys) {
    result[keys[key]] = deepCopy(obj[keys[key]]);
  }

  return result
}

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

const deepCopiedObject = deepCopy(testObj)
deepCopiedObject.football.watch.daily = true; 
console.log(testObj);
console.log(deepCopiedObject);