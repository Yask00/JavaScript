class Token
{
  constructor(value=0)
  {
    this.value = value;
  }
}

class Memento
{
  constructor()
  {
    this.tokens = [];
  }
}

class TokenMachine
{
  constructor()
  {
    // todo
    this.tokens = [];
  }

  addTokenValue(value) // only value
  {
    return this.addToken(new Token(value));
  }

  addToken(token) // token object
  {
    // todo
    this.tokens.push(token);
    let m = new Memento();
    m.tokens = this.tokens.map(t => new Token(t.value));
    return m;
  }

  revert(m)
  {
    // todo
    this.tokens = m.tokens.map(t => new Token(t.value));
  }
}

let tm = new TokenMachine();
tm.addToken();
tm.addTokenValue(5);