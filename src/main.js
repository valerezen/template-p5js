import p5 from "p5";
import { Pane } from "tweakpane";

const container = document.querySelector(".container");
let myCanvas;

const PARAMS = {
  aspect: 1,
};

const sizes = {
  width: 400,
  height: 400,
};

const pane = new Pane({
  title: "Params",
});

const sketch = (p) => {
  p.setup = () => {
    myCanvas = p.createCanvas(sizes.width, sizes.height);
    myCanvas.parent(container);
  };

  p.draw = () => {
    p.background("red");
  };
};

new p5(sketch);

console.log(container);
