/* For interacting with the game server. */

var game_id;
var boardHeight;
var boardWidth;

// constructor
// Arguments:
//    mine_count:  0 < int < (height * width)
//    height:  0 < int
//    width:  0 < int
// Returns:
//    game_id: UUID
function server(mine_count, height, width) {
  if (mine_count <= 0) {
    // produce error
  } else if (mine_count >= (height * width)) {
    // produce error
  }
  if (height <= 0) {
    // produce error
  }
  if (width <= 0) {
    // produce error
  }
}

// flag and unflag tiles
// use compare-and-swap for toggling flag state
// unflagged: even; flagged: odd
// Arguments:
//    xcoord:  0 < int < width
//    ycoord:  0 < int < height
//    expected_value: int
// Returns:
//    success?: Bool
// Side Effects:
//    triggers flag update for all clients
function flag(xcoord, ycoord, expected_value) {
  if (xcoord < 0 || xcoord > boardWidth) {
    return false;
  } else if (ycoord < 0 || ycoord > boardHeight) {
    return false;
  } else if (!expected_value.isInt()) {
    return false;
  }
}

// clear tile(s)
// Arguments:
//    xcoord:  0 < int < width
//    ycoord:  0 < int < height
// Returns:
//    success?: Bool
// Side Effects:
//    triggers client updates for cleared tile(s). possibly triggers the
//    termination of the game.
function clear(xcoord, ycoord) {
  if(xcoord < 0 || xcoord > boardWidth) {
    return false;
  } else if (ycoord < 0 || ycoord > boardHeight) {
    return false;
  }
}

/* for testing purposes: */
function isClear(xcoord, ycoord) {}

function isFlagged(xcoord, ycoord) {}

function isLost() {}

function isMine() {}

function isWon() {}
