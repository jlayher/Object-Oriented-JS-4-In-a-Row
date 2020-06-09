class Game {
  constructor(){
    this.board = New Board();
    this.players = this.createPlayers();  //same confusion as to the use of "this" that I had in the Player constructor
    this.ready = false;
  }

  /**
   * Creates two player objects
   * @return {Array}  An array of two Player objects.
   */
  createPlayers(){
    const players = [new Player("Player 1", 1, "#e15258", true),
                     new Player("Player 2", 2, "#e59a13")];
    return players;
  }

  /**
   * Gets game readu for play
   */
  startGame(){


  }
}
