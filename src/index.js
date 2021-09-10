var view = {
  displayMessage: function (msg) {
    var messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },

  displayHit: function (location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },

  displayMiss: function (location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  }
};

view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");

view.displayMessage("Tap tap, is this thing on?");

var model = {
  boardSize: 7,
  numShips: 3,
  shipLength: 3,
  shipSunk: 0,

  ships: [
    { location: ["06", "16", "26"], hits: ["", "", ""] },
    { location: ["24", "34", "44"], hits: ["", "", ""] },
    { location: ["10", "11", "12"], hits: ["", "", ""] }
  ],
  fire: function (guess) {
    for (var i = 0; i < this.numShips; i++) {
      var ship = this.ship[i];
      var index = ship.locations.indexOf(guess);

      if (index >= 0) {
        ship.hits[index] = "hit";
      }
    }
  }
};
