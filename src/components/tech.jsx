import Matter from "matter-js";
import { useEffect } from "react";

function Tech() {
  useEffect(() => {
    var Example = {};

    Example.circleStack = function () {
      var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composites = Matter.Composites,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        Composite = Matter.Composite,
        Bodies = Matter.Bodies;

      // create engine
      var engine = Engine.create(),
        world = engine.world;

      // create renderer
      var render = Render.create({
        // element: document.getElementById('matter'),
        element: document.body,
        engine: engine,
        options: {
          width: 800,
          height: 600,
          showAngleIndicator: true,
          wireframes: false
        }
      });

      Render.run(render);

      // create runner
      var runner = Runner.create();
      Runner.run(runner, engine);

      // add bodies
      var stack = Composites.stack(100, 600 - 21 - 20 * 20, 10, 10, 20, 0, function (x, y) {
        return Bodies.circle(x, y, 20);
      });

      Composite.add(world, [
        // walls
        Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
        Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
        Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
        Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
        stack
      ]);

      // add mouse control
      var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
          mouse: mouse,
          constraint: {
            stiffness: 0.2,
            render: {
              visible: false
            }
          }
        });

      Composite.add(world, mouseConstraint);

      // keep the mouse in sync with rendering
      render.mouse = mouse;

      // fit the render viewport to the scene
      Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: 800, y: 600 }
      });

      // Scroll event listener for realistic physics
      let lastScrollY = window.scrollY;
      let lastTimestamp = performance.now();

      window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const currentTimestamp = performance.now();

        // Calculate scroll speed (velocity)
        const deltaY = currentScrollY - lastScrollY;
        const deltaTime = (currentTimestamp - lastTimestamp) / 1000; // in seconds
        const velocityY = deltaY / deltaTime;

        // Apply force to all bodies in the world based on scroll velocity
        const forceMagnitude = 0.0000015 * velocityY; // Adjust the multiplier to control the strength

        Composite.allBodies(world).forEach(body => {
          Matter.Body.applyForce(body, body.position, {
            x: 0,
            y: forceMagnitude // Applying upward force proportional to scroll speed
          });
        });

        // Update the last scroll position and timestamp
        lastScrollY = currentScrollY;
        lastTimestamp = currentTimestamp;
      });

      // context for MatterTools.Demo
      return {
        engine: engine,
        runner: runner,
        render: render,
        canvas: render.canvas,
        stop: function () {
          Matter.Render.stop(render);
          Matter.Runner.stop(runner);
        }
      };
    };

    Example.circleStack();

    return () => {
      // Cleanup the scroll event listener on component unmount
      window.removeEventListener('scroll', () => { });
    };
  }, []);

  return (
    <>
      <div className="tech d-flex align-items-center justify-content-center">
        <div style={{ width: "800px", height: "600px" }} className="matter" id="matter"></div>
      </div>
    </>
  );
}

export default Tech;
