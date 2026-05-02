import { Application, Assets, Sprite, Graphics } from "pixi.js";

(async () => {
    // Create a new application
    const app = new Application();

    // Initialize the application
    await app.init({ background: "#1099bb", resizeTo: window });

    // Append the application canvas to the document body
    document.getElementById("pixi-container")!.appendChild(app.canvas);

    const square = new Graphics();
    square.rect(0, 0, 100, 100).fill(0xff0000);

    square.pivot.set(50, 50);

    square.position.set(app.screen.width / 2, app.screen.height / 2);

    // Add the square to the stage
    app.stage.addChild(square);

    // Listen for animate update
    app.ticker.add((time) => {
        // Just for fun, let's rotate mr rabbit a little.
        // * Delta is 1 if running at 100% performance *
        // * Creates frame-independent transformation *
        square.rotation += 0.1 * time.deltaTime;
    });
})();
