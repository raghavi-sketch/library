
var Mrect , Frect ;



function setup() {
  createCanvas(1200,800);
 Frect= createSprite(600, 400,50, 80);
Frect.shapeColor="green";
Frect.debug=true;

Mrect= createSprite(400, 200,80, 30);
Mrect.shapeColor="green";
Mrect.debug=true;

}

function draw() {
  background(0,0,0);  

Mrect.x =mouseX;
Mrect.y=mouseY;

if (isTouching(Mrect,Frect)){
Mrect.shapeColor="blue"
Frect.shapeColor="blue"

}
else{

Mrect.shapeColor="green";
Frect.shapeColor="green";
}
  drawSprites();
}

