import React, { useRef, useEffect } from "react";
import p5 from "p5";

const P5Sketch = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const canvasRef = useRef();

  useEffect(() => {
    // Initialize p5.js sketch in the canvas element
    new p5(sketch, canvasRef.current);
  }, []);

  const sketch = (p) => {
    // p5.js sketch code here

    p.setup = () => {
      p.createCanvas(windowSize.current[0], 480);
      // Additional setup code
    };

    p.draw = () => {
      p.background("#FEF1E5");

      const lineSpacing = 30;
      const lineAmplitude = 10;
      const lineFrequency = 0.02;
      const lineWidth = p.width;
      const lineCount = p.height / lineSpacing + 2;

      for (let i = 0; i < lineCount; i++) {
        const lineY = i * lineSpacing - p.frameCount * 2;
        p.strokeWeight(2);
        p.stroke(0);
        p.noFill();
        p.beginShape();
        for (let x = 0; x < lineWidth; x++) {
          const lineX = x;
          const lineOffset =
            p.sin(lineX * lineFrequency + lineY * lineFrequency * 0.5) *
            lineAmplitude;
          const lineVertexY = lineY + lineOffset;
          p.vertex(lineX, lineVertexY);
        }
        p.endShape();
      }
    };
  };

  return <div ref={canvasRef}></div>;
};

export default P5Sketch;
