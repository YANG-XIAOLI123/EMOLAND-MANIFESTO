/** @type {SVGImage[]} */
let linea_svg=[];

/** @type {SVGImage[]} */
let colore_svg=[];



/** @type {Font} */
let font

let svg
 
function preload() {
colore_svg=[
  loadSVG("./assets/colore/1.svg"),
  loadSVG("./assets/colore/2.svg"),
  loadSVG("./assets/colore/3.svg"),
  loadSVG("./assets/colore/4.svg"),
  loadSVG("./assets/colore/5.svg"),
  loadSVG("./assets/colore/6.svg"),
  loadSVG("./assets/colore/7.svg"),
  loadSVG("./assets/colore/8.svg"),
]


linea_svg=[
loadSVG("./assets/linea/01.svg"),
  loadSVG("./assets/linea/02.svg"),
  loadSVG("./assets/linea/03.svg"),
  loadSVG("./assets/linea/04.svg"),
  loadSVG("./assets/linea/05.svg"),
  loadSVG("./assets/linea/06.svg"),
  loadSVG("./assets/linea/07.svg"),
  loadSVG("./assets/linea/08.svg"),
]
}



function setup() {
  createCanvas(400, 400, SVG);
  addDownloadButton();
 imageMode(CENTER)
  noLoop(); // Opzionale
}

function draw() {
  clear(); // Non cancellare!


  let random_colore=random(colore_svg)
  let random_linea=random(linea_svg)

 image(random_colore,100,100,150,150)
 image(random_linea,200,200,150,150)

 
  }


  


