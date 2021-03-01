export class Connect4 {



  constructor() {
    // Good luck
  }
   player = 1
   playerOneScore = 0
   playerTwoScore = 0
  play(col: number): string {
    
  //  for (var c = 0; c <=6; c++){
  //    col[i]
  //  }
   
    for (var i = 0; i <= 6; i++) {
      this.player = this.player || 1;
      
        if (this.player == 1){
          if (col == col){
            this.playerOneScore++
           
          }
         if (this.playerOneScore == 4){
          return 'Player 1 wins!' 
         }
         else{
         this.player++
          return 'Player 1 has a turn' 
         }
        }
        else{
          if (col == col){
            this.playerTwoScore++
          }
         if (this.playerTwoScore == 4){
          return 'Player 2 wins!' 
         }
         else{
          this.player--
          return 'Player 2 has a turn'
         }
          
        }
        
  }
  //  var cureentPlayer = 1

  //   for (var i = 0; i < 7; i++) {
        
  //   }

  
    // Good luck
  }
}