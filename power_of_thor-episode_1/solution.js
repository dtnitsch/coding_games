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

// Figure out if X or Y is longer
// ... the longer one is where we will hmm.
x = Math.abs(lightX - initialTX);
y = Math.abs(lightY - initialTY);

// Assuming people take ONE step at a time in the shorter direction
// ... the longer on will talk as long as they can in a given direction before
// ... taking a step horizontally
stepx = 1;
stepy = 1;
if(x > y) {
    stepy = Math.floor(x / y);
} else if(x < y) {
    stepx = Math.floor(y / x);
}

// Setting the initial location
x = initialTX;
y = initialTY;

// game loop
while (true) {
    var remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

    // Write an action using print()
    // To debug: printErr('Debug messages...');
    
    // Blank out the X direction in case we don't need it.
    directionx = '';
    // If the current location is the SAME as the end result, no more changes to X
    // ... Otherwise, figure out if we are going left or right, and where we currently are (initalTX)
    //
    // Note - Modulus:  Only step diagonally when we need to.
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
