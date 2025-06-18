let colore_emozioni = [];
let linea_emozioni = [];
let immagini_disegnate=[]
let font;
let parola = "EMOLAND";


function preload() {
  font = loadFont("./fonts/EMOLAND.ttf"); 
  colore_emozioni=[
    loadImage( "./assets/colore/1.svg"),
    loadImage("./assets/colore/2.svg"),
    loadImage("./assets/colore/3.svg"),
    loadImage("./assets/colore/4.svg"),
    loadImage("./assets/colore/5.svg"),
    loadImage("./assets/colore/6.svg"),
    loadImage("./assets/colore/7.svg"),
    loadImage("./assets/colore/8.svg"),
  ]
 linea_emozioni = [
   loadImage ("./assets/linea/01.svg"),
   loadImage ("./assets/linea/02.svg"),
   loadImage ("./assets/linea/03.svg"),
   loadImage ("./assets/linea/04.svg"),
   loadImage ("./assets/linea/05.svg"),
   loadImage ("./assets/linea/06.svg"),
   loadImage ("./assets/linea/07.svg"),
   loadImage ("./assets/linea/08.svg"),
  ];
}

function setup() {
  imageMode(CENTER)
  createCanvas(windowWidth, windowHeight); 


 
}
function draw(){
   background(255);


  textFont(font);
  textSize(72);
  textAlign(CENTER, CENTER);
  fill(0);
  text(parola, width / 2, height / 2);

for (let i of immagini_disegnate) {
  push()
  translate(i.x, i.y)
  rotate(frameCount*0.01)
 image(i.forma, 0, 0, i.dimensione, i.dimensione)
  pop()
}

}


function mousePressed() {
  let chosenPath = random(random() < 0.5 ? colore_emozioni : linea_emozioni);

 immagini_disegnate.push(
  {
    forma:chosenPath,
    x:mouseX,
    y:mouseY,
    dimensione:random(100,150)
    
  }
 )


}