$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(500, 0, 20, 290, "brown");
    createPlatform(1350, 150, 50, 50, "red");

    createPlatform(100, 650, 200, 20, "brown");
    createPlatform(350, 550, 180, 20, "brown");
    createPlatform(650, 450, 180, 20, "brown");
    createPlatform(900, 350, 180, 20, "brown");
    createPlatform(1200, 250, 180, 20, "brown");

    createPlatform(250, 400, 120, 20, "brown");
    createPlatform(750, 250, 120, 20, "brown");
    createPlatform(1050, 500, 120, 20, "brown");

    // TODO 3 - Create Collectables
    createCollectable("diamond", 300, 360, 0, 0);
    createCollectable("database", 740, 410, 0, 0);
    createCollectable("steve", 1375, 90, 0.5, 0.7);

    // TODO 4 - Create Cannons
    createCannon("top", 400, 2500);
    createCannon("left", 300, 2000);
    createCannon("right", 150, 1500);
    createCannon("bottom", 800, 2200);
    createCannon("right", 450, 1800);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
