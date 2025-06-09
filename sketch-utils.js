let colore_emozioni = [];
let linea_emozioni = [];
let font;
let parola = "EMOLAND";
let size = random(20, 150); 

function preload() {
  font = loadFont("./fonts/EMOLAND.ttf"); 
}

function setup() {
  createCanvas(windowWidth, windowHeight); 
  background(255);


  textFont(font);
  textSize(72);
  textAlign(CENTER, CENTER);
  fill(0);
  text(parola, width / 2, height / 2);

  
  colore_emozioni = [
    "./assets/colore/1.svg",
    "./assets/colore/2.svg",
    "./assets/colore/3.svg",
    "./assets/colore/4.svg",
    "./assets/colore/5.svg",
    "./assets/colore/6.svg",
    "./assets/colore/7.svg",
    "./assets/colore/8.svg",
  ];

  linea_emozioni = [
    "./assets/linea/01.svg",
    "./assets/linea/02.svg",
    "./assets/linea/03.svg",
    "./assets/linea/04.svg",
    "./assets/linea/05.svg",
    "./assets/linea/06.svg",
    "./assets/linea/07.svg",
    "./assets/linea/08.svg",
  ];
}

function mousePressed() {
  let chosenPath = random(random() < 0.5 ? colore_emozioni : linea_emozioni);

  let svgElemento = createImg(chosenPath, "svg-image");
  svgElemento.position(mouseX, mouseY);

  let size = random(50, 150); // 随机尺寸
  svgElemento.size(size, size);

  svgElemento.style('pointer-events', 'none');

 setTimeout(() => {
svgElemento.remove();
 }, 10000);
}