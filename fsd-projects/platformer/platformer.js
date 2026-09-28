function init() {
    // TODO 1 - Enable the Grid
    // Uncomment the line below to see the grid (make sure to comment it back out before going live!)
    // toggleGrid();


    // TODO 2 - Create Platforms
    // At least 5 platforms with different positions and sizes
    createPlatform(200, 600, 200, 20, "hotpink");
    createPlatform(500, 480, 150, 20, "orange");
    createPlatform(750, 360, 200, 20, "yellow");
    createPlatform(400, 240, 180, 20, "lime");
    createPlatform(100, 350, 150, 20, "cyan");


    // TODO 3 - Add Collectables
    // At least 3 collectables using valid types: "database", "diamond", "grace", "kennedi", "max", "steve"
    createCollectable("diamond", 250, 550, 0.5, 0.7);
    createCollectable("steve", 800, 300, 0, 0);
    createCollectable("database", 450, 180, 0.3, 0.5);


    // TODO 4 - Add Cannons
    // At least 3 cannons on different sides ("left", "right", "top") with varying delays
    createCannon("left", 400, 2000);
    createCannon("right", 300, 1500);
    createCannon("top", 500, 2500);


    // TODO 5 - Make your level challenging and playable!
}
