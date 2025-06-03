/** @type {SVGImage[]} */ 
let linea_svg = [];

/** @type {SVGImage[]} */
let colore_svg = [];

/** @type {Font} */
let font;

let angle = 0;

let random_colore;
let random_linea;

function preload() {
  colore_svg = [
    loadSVG("./assets/colore/1.svg"),
    loadSVG("./assets/colore/2.svg"),
    loadSVG("./assets/colore/3.svg"),
    loadSVG("./assets/colore/4.svg"),
    loadSVG("./assets/colore/5.svg"),
    loadSVG("./assets/colore/6.svg"),
    loadSVG("./assets/colore/7.svg"),
    loadSVG("./assets/colore/8.svg"),
  ];

  linea_svg = [
    loadSVG("./assets/linea/01.svg"),
    loadSVG("./assets/linea/02.svg"),
    loadSVG("./assets/linea/03.svg"),
    loadSVG("./assets/linea/04.svg"),
    loadSVG("./assets/linea/05.svg"),
    loadSVG("./assets/linea/06.svg"),
    loadSVG("./assets/linea/07.svg"),
    loadSVG("./assets/linea/08.svg"),
  ];
}

function setup() {
  createCanvas(400, 400, SVG);
  imageMode(CENTER);
  frameRate(40); // 控制帧率


  random_colore = random(colore_svg);
  random_linea = random(linea_svg);
}

function draw() {
  clear();
  background(255);

  push();
  translate(200, 200);
  rotate(radians(angle));
  image(random_colore, 0, 0, 250, 250);
  pop();


  push();
  translate(200, 200);
  rotate(radians(-angle));
  image(random_linea, 0, 0, 250, 250);
  pop();


  angle += 0.5; 
}