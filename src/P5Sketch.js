import React, { useRef, useEffect } from "react";

import one from "./assets/photos/one.jpg";
import two from "./assets/photos/two.jpg";
import three from "./assets/photos/three.jpg";
import four from "./assets/photos/four.jpg";
import five from "./assets/photos/five.jpg";
import six from "./assets/photos/six.jpg";
import seven from "./assets/photos/seven.jpg";
import eight from "./assets/photos/eight.jpg";
import nine from "./assets/photos/nine.jpg";
import ten from "./assets/photos/ten.jpg";
import eleven from "./assets/photos/eleven.jpg";

import p5 from "p5";

const P5Sketch = () => {
  const canvasRef = useRef();
  const width = window.innerWidth;
  const height = window.innerHeight;

  const images = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
  ];
  let imgIndex = 0;

  useEffect(() => {
    const sketch = (p) => {
      let img;

      p.preload = () => {
        // Load the first image in the preload() function
        img = p.loadImage(images[0]);
      };

      p.setup = () => {
        p.createCanvas(width, height);
      };

      p.draw = () => {
        // Check if the image is loaded before calling drawImage()
        if (img && img.width > 0) {
          // Resize the image to fit the canvas
          img.resize(width / 5, 0);
          p.image(img, p.mouseX, p.mouseY);
        }
      };

      p.mouseClicked = () => {
        // Load the next image when the user clicks the mouse
        imgIndex = (imgIndex + 1) % images.length;
        img = p.loadImage(images[imgIndex]);
      };
    };

    new p5(sketch, canvasRef.current);
  }, []);

  return <div ref={canvasRef} />;
};

export default P5Sketch;
