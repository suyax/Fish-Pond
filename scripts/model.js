//model: create all the fishes in an array;
var fishes = {};

var model = {
  genfishes: function() {
    var Fish = function(name, img) {
      this.name = name;
      this.img = img;
      this.count = 0;
    };
    var fishes[1] = new Fish("Amy", "golden-fish-1.jpg");
    var fishes[2] = new Fish("Brandy", "golden-fish-2.jpg");
    var fishes[3] = new Fish("Bob", "golden-fish-3.jpg");
    var fishes[4] = new Fish("Lulu", "golden-fish-4.jpg");
    var fishes[5] = new Fish("Duke", "golden-fish-5.jpg");
  }
};
export
