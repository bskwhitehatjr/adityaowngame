class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h1');
    this.title = createElement('h1');
    this.reset = createButton('Reset');
   
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  
  display(){
 
    this.title.html("Aditya Own Game");
    this.title.position(displayWidth/2 - 270, -35);
    this.title.style('font-size', '70px');
    this.title.style('color', 'black');

    this.input.position(displayWidth/2 - 240 , displayHeight/2 - 80);
    this.input.style('width', '300px');
    this.input.style('height', '50px');
    this.input.style('font-size', '50px');
    this.input.style('background', 'lightpink');
  

    this.button.position(displayWidth/2+66 ,displayHeight/2-80);
    this.button.style('width', '200px');
    this.button.style('height', '55px');
    this.button.style('font-size', '40px');
    this.button.style('color', 'white');
    this.button.style('background', 'red');
    
    this.reset.position(displayWidth-200,20);
    this.reset.style('width', '100px');
    this.reset.style('height', '30px');
    this.reset.style('color', 'red');
    this.reset.style('font-size', '20px');
    this.reset.style('background', 'white');

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 230, displayHeight/4);
      this.greeting.style('font-size', '90px');
      this.greeting.style('color', 'black');
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
     
    });

  }
}
