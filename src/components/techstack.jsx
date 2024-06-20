import Matter from "matter-js";
import { useEffect, useState, useRef } from "react";

function TechStack() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let engine;
    let words = [];
    let ground, wallLeft, wallRight;
    let wordsToDisplay = [
      "MERN STACK",
      "GSAP",
      "THREE JS",
      'WEBSOCKET',
      'NEXT.JS',
      'PRISMA',
      'DOCKER',
      'KUBERNETES',
      'PROMETHEUS',
      'GRAFANA',
      'SCALING'
    ];

    class Word {
      constructor(x, y, word) {
        this.body = Matter.Bodies.rectangle(x, y, word.length * 20, 40);
        this.word = word;
        Matter.World.add(engine.world, this.body);
      }

      show() {
        let pos = this.body.position;
        let angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        stroke('0f0f0f');
        strokeWeight(3);
        rect(0, 0, this.word.length * 40 + 80, 100, 60);
        noStroke();
        fill('0f0f0f');
        textSize(40);
        textAlign(CENTER, CENTER);
        text(this.word, 0, 0);
        pop();
      }
    }

    function setup() {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      canvas.width = 800;
      canvas.height = 800;
      engine = Matter.Engine.create();
      ground = Matter.Bodies.rectangle(canvas.width / 2, canvas.height - 20, canvas.width, 10, { isStatic: true });
      wallLeft = Matter.Bodies.rectangle(0, canvas.height / 2, 10, canvas.height, { isStatic: true });
      wallRight = Matter.Bodies.rectangle(canvas.width, canvas.height / 2, 10, canvas.height, { isStatic: true });

      Matter.World.add(engine.world, [ground, wallLeft, wallRight]);

      for (let i = 0; i < wordsToDisplay.length; i++) {
        words.push(new Word(Math.random() * canvas.width, -200, wordsToDisplay[i]));
      }
    }

    function draw() {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#606060';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      Matter.Engine.update(engine);
      for (let word of words) {
        word.show();
      }
    }

    function mouseMoved(event) {
      for (let word of words) {
        if (Math.dist(event.clientX, event.clientY, word.body.position.x, word.body.position.y) < 50) {
          Matter.Body.applyForce(
            word.body,
            { x: word.body.position.x, y: word.body.position.y },
            { x: Math.random() * 0.4 - 0.2, y: Math.random() * 0.4 - 0.2 }
          );
        }
      }
    }

    setup();

    let animationId;
    function animate() {
      draw();
      animationId = requestAnimationFrame(animate);
    }
    animate();

    canvasRef.current.addEventListener('mousemove', mouseMoved);

    return () => {
      cancelAnimationFrame(animationId);
      canvasRef.current.removeEventListener('mousemove', mouseMoved);
    };
  }, []);

  return (
    <div className="tech d-flex align-items-center justify-content-center">
      <canvas ref={canvasRef} id="matter"></canvas>
    </div>
  );
}

export default TechStack;