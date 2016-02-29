$fishlist = $('#fishlist');
$fishdisplay = $('#fishdisplay');
$fishNumShow = $('#fishnumshow');

//model: create all the fishes in an array;
var model = {
  genfishes: function() {
    var Fish = function(name, img, count) {
      this.name = name;
      this.img = img;
      this.count = count || 0;
    };
    var Amy = new Fish("Amy", "./image/golden-fish-1.jpg");
    var Brandy = new Fish("Brandy", "./image/golden-fish-2.jpg");
    var Bob = new Fish("Bob", "./image/golden-fish-3.jpg");
    var Lulu = new Fish("Lulu", "./image/golden-fish-4.jpg");
    var Duke = new Fish("Duke", "./image/golden-fish-5.jpg");
    var fishes = {'Amy':Amy, 'Brandy':Brandy,'Bob':Bob, 'Lulu':Lulu, 'Duke':Duke};
    return fishes;
  }
};
//octopus: 1. getCatName for button 2. getCatimg name and clickcount for display area 3. select cat 4. click
var octopus = {
  init: function() {
    fishes = model.genfishes();
    fishButtons.init();
    fishDisplay.init();
    fishNumShow.init();
  },

  counterClick: function(fish) {
    this.count += 1;
    fishNumShow.render(fish);
  },

  adminMode: function() {
    document.getElementById("form1").className = "formon";
  },
  nonAdminMode: function() {
    document.getElementById("form1").className = "formoff";
  },
  fishUpdate: function(fish) {

    fish.name = document.getElementById("fishname").value;
    fish.img = document.getElementById("fishphoto").value;
    fish.count = document.getElementById("fishfed").value;
    fishes[fish.name] = fish;

    $fishlist.empty();
    $fishdisplay.empty();
    $fishNumShow.empty();
    fishButtons.render();
    fishDisplay.render(fish);
    fishNumShow.render(fish);
  }
};

//view 1. buttons 2. display
var fishButtons = {

  init: function() {
    this.render();

  },

  render: function() {
    var htmlStr = '';
    _.each(fishes, function(fish) {
      htmlStr += '<button id="button' + fish.name +
        '"onclick="fishDisplay.render(' + fish + ');fishNumShow.render(' +
        fish + ');">' + fish.name + '</button>';
    });
    ($fishlist).append(htmlStr);
  }
};

var fishDisplay = {
  init: function() {
    this.render(fishes['Amy']);

  },

  render: function(fish) {
    $('#fishdisplay').empty();
    var htmlStr = '';
    htmlStr = '<img src="' + fish.img + '">';
    ($fishdisplay).append(htmlStr);
    var imgTag = document.getElementsByTagName("img");
    var newfish = document.getElementById("save");
    imgTag[0].onclick = function() {
      octopus.counterClick(fish);
    };
    newfish.onclick = function() {
      octopus.fishUpdate(fish);
    };

  }
};
var fishNumShow = {
  init: function() {
    this.render(fishes["Amy"]);

  },
  render: function(fish) {
    $('#fishnumshow').empty();
    var htmlStr = '';
    htmlStr = '<h2>' + fish.name + ' <h3>Has been fed ' + fish.count + ' times</h3></h2>';
    ($fishNumShow).append(htmlStr);
  }
};
octopus.init();
