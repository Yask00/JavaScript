class SingleValue {
  constructor(value) {
    this.value = value;
  }
}

class ManyValues {
  // ensure there's a push(value) method
  constructor(values = []) {
    this.values = values;
  }

  push(value) {
    this.values.push(value);
  }
}

let sum = function (containers) {
  // todo
  //   console.log(containers);
  let result = 0;
  for (let i = 0; i < containers.length; i++) {
    let container = containers[i];
    if (container instanceof SingleValue) {
      result += +container.value;
      continue;
    } else if (container instanceof ManyValues) {
      for (let value of container.values) {
        result += value;
      }
      continue;
    }
  }
  return result;
};

// const sv = new SingleValue(1);
// const sv2 = new SingleValue(1);
// const mv = new ManyValues([1, 2, 3, 4, 5]);

// console.log(sum([sv, sv2]));
// console.log(sum([sv, mv]));
// sum([sv, sv2]); // 2
// sum([sv, mv]); // 1 + 1 + 2 + 3 + 4 + 5 = 16

let singleValue = new SingleValue(11);
let otherValues = new ManyValues();
otherValues.push(22);
let anotherValue = new SingleValue(33);
otherValues.push(anotherValue.value);
console.log(sum([singleValue, otherValues]));

// --------- Solution that makes singleValue iterable ---------
// class SingleValue
// {
//   constructor(value)
//   {
//     this.value = value;
//   }

//   [Symbol.iterator]()
//   {
//     let returned = false;
//     return {
//       next: () => ({
//         value: this.value,
//         done: returned++
//       })
//     }
//   }
// }

// class ManyValues extends Array {}

// let sum = function(containers)
// {
//   let result = 0;
//   for (let c of containers)
//     for (let i of c)
//       result += i;
//   return result;
// };