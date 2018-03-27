/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
var lightX = parseInt(inputs[0]); // the X position of the light of power
var lightY = parseInt(inputs[1]); // the Y position of the light of power
var initialTX = parseInt(inputs[2]); // Thor's starting X position
var initialTY = parseInt(inputs[3]); // Thor's starting Y position

x = Math.abs(lightX - initialTX);
y = Math.abs(lightY - initialTY);

stepx = 1;
stepy = 1;
if(x > y) {
    stepy = Math.floor(x / y);
} else if(x < y) {
    stepx = Math.floor(y / x);
}

x = initialTX;
y = initialTY;

// game loop
while (true) {
    var remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

    // Write an action using print()
    // To debug: printErr('Debug messages...');
    
    directionx = '';
    if(initialTX != lightX && x++ % stepx == 0) {
        directionx = (initialTX < lightX ? 'E' : 'W');
        initialTX += (initialTX <= lightX ? 1 : -1);
    }
    
    directiony = '';
    if(initialTY != lightY && y++ % stepy == 0) {
        directiony = (initialTY < lightY ? 'S' : 'N');
        initialTY += (initialTY <= lightY ? 1 : -1);
    }

    // A single line providing the move to be made: N NE E SE S SW W or NW
    print(directiony + directionx);
}
