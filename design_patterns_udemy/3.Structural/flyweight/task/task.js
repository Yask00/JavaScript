class Sentence
{
  constructor(plainText)
  {
    // todo
    this.plainText = plainText;
    this.wordsObject = plainText.split(' ').map((word, idx) => {
        return { word: word, capitalize: false, index: idx };
    });
  }

  at(index)
  {
    // todo
    console.log(this.wordsObject);
    if (index < 0 || index >= this.wordsObject.length) {
      throw new Error('Index out of bounds');
    }
    return this.wordsObject[index];

  }

  toString()
  {
    // todo
    return this.wordsObject.map((wordObj) => {
        if (wordObj.capitalize) {
        return wordObj.word.toUpperCase();
      } else {
        return wordObj.word;
      }
    }).join(' ');
  }
}

let s = new Sentence('alpha beta gamma');
s.at(1).capitalize = true;
s.at(2).capitalize = true;
console.log(s.toString()); // alpha BETA gamma