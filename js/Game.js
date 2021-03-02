class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

  }

  play(){
    form.hide();
    w1 = createSprite(100,200);
    w1.addImage( warriorimg1)
    w2 = createSprite(300,200);
    w2.addImage( warriorimg2)
    
    wars = [w1, w2];
    Player.getPlayerInfo();
   
    
    if(allPlayers !== undefined){
    
      var index = 0;
      var x = 0 ;
      var y = 0;

      for(var plr in allPlayers){
       
        index = index + 1 ;

        x = x + 200;
        y = y+200;
        wars[index-1].x = x;
        wars[index-1].y = y;
       
        if (index === player.index){ 
          wars[index - 1].shapeColor = "red";      
          camera.position.x = displayWidth/2;
          camera.position.y = wars[index-1].y;
        }
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null)
    {
      player.distanceY +=10
      player.update();
    }
    if(keyIsDown(DOWN_ARROW) && player.index !== null)
    {
      player.distanceY -=10
      player.update();
    }
    if(keyIsDown(RIGHT_ARROW) && player.index !== null)
    {
      player.distanceX +=10
      player.update();
    }
    if(keyIsDown(LEFT_ARROW) && player.index !== null)
    {
      player.distanceX -=10
      player.update();
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
    console.log(player.rank);
  }
}
