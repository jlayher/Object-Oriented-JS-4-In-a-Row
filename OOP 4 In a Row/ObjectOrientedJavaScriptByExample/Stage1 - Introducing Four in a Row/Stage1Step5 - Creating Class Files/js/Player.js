class Player {
  constructor(name, id, color, active = false){
    this.name = name;
    this.id = id;
    this.color = color;
    this.active = active;
    this.tokens = this.createTokens(21);  //the use of "this.createTokens" confuses me
  }
  /**
  * Creates token objects for player
  * @param   {integer}   num - Number of token objects to be created
  * @return  {array}     tokens - an array of new token objects
  */
  createTokens(num) {
    const tokens = [];
      tokens.push(token);
    }
    return tokens;
  }
}
