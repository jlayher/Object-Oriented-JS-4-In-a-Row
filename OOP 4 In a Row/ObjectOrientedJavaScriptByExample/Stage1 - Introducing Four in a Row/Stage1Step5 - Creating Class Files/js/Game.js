class Game {
  constructor(){
    this.board = new Board();
    this.players = this.createPlayers();  //same confusion as to the use of "this" that I had in the Player constructor
    this.ready = false;
  }
  /**
  * Getter Method for Active Plauer
  */
  get activePlayer(){
    return this.players.find(player => player.active);

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

  handleKeydown(e){
    if (this.ready) {
      if (e.key === "ArrowLeft") {
          // move left
      } else if (e.key === "ArrowRight"){
        
      }

    }

  }

  /**
   * Gets game ready for play
   */
  startGame(){
    this.board.drawHTMLBoard();
    this.activePlayer.activeToken.drawHTMLToken();
    this.ready = true;
  }
}
