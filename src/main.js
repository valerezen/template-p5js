import p5 from "p5";
import { Pane } from "tweakpane";

const container = document.querySelector(".container");
let myCanvas;

const PARAMS = {
  aspectRatio: 210 / 297,
};

const resolutions = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const sizes = {
  width: resolutions.height * PARAMS.aspectRatio,
  height: resolutions.height,
};

const pane = new Pane({
  title: "Params",
});

pane
  .addBinding(PARAMS, "aspectRatio", {
    label: "ratio",
    options: {
      A4: 210 / 297,
      "1:1": 1 / 1,
      "3:4": 3 / 4,
      "9:16": 9 / 16,
    },
  })
  .on("change", () => {
    sketchInstance.windowResized();
  });

const btnExport = pane.addButton({
  title: "export png",
});

const sketch = (p) => {
  p.setup = () => {
    myCanvas = p.createCanvas(sizes.width, sizes.height);
    myCanvas.parent(container);
  };

  p.draw = () => {
    p.background("red");
    p.fill("blue");
    p.rect(sizes.width / 2 - 50, sizes.height / 2 - 50, 100, 100);
  };

  p.windowResized = () => {
    resolutions.width = window.innerWidth;
    resolutions.height = window.innerHeight;

    sizes.width = resolutions.height * PARAMS.aspectRatio;
    sizes.height = resolutions.height;

    p.resizeCanvas(sizes.width, sizes.height);
  };

  btnExport.on("click", () => {
    p.saveCanvas("sketch", "png");
  });

  // document.addEventListener("keydown", (e) => {
  //   if (e.key == " ") {
  //     p.saveCanvas("sketch", "png");
  //   }
  // });
};

const sketchInstance = new p5(sketch);
