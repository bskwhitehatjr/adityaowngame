var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var w1,w2,wars;

function preload(){
  warriorimg1 = loadImage("images/c1.png");
  warriorimg2 = loadImage("images/c2.png");
  sp = loadImage("images/sp.png");
  map = loadImage("images/Map.png");
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState===0){
    image(sp,0,0,displayWidth,displayHeight);
  }
  if(gameState === 1){
    clear();
    image(map,0,0,displayWidth,displayHeight);
    game.play();
   
  }
  if(gameState === 2){
    game.end();
  }
}
