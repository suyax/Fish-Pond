const dummyData = {
  food:['apple', 'avocado', 'banana', 'orange', 'milk','berry','beef', 'candy','watermelon','kale'],
  genfishes: function(food) {
    function Fish (name, img, ffood, count) {
      this.name = name;
      this.imgSrc = img;
      this.clickCount = count || 0;
      this.favoriteFood = ffood;
    }
    const Amy = new Fish("Amy", "http://vignette4.wikia.nocookie.net/halo/images/d/d8/New_goldfish.png/revision/latest?cb=20121123202613",food.splice(0,3));
    const Brandy = new Fish("Brandy", "http://www.termiteterry.com/dev/wp-content/uploads/2015/05/goldfish.png",food.slice(1,4));
    const Bob = new Fish("Bob", "http://orig02.deviantart.net/e629/f/2015/078/8/f/goldfish_by_jonrek2014-d8m9rgo.png", food.slice(2,5));
    const Lulu = new Fish("Lulu", "http://kindersay.com/files/images/goldfish.png", food.slice(3,6));
    const Duke = new Fish("Duke", "http://1.bp.blogspot.com/-Fg_fgAQ-Lz0/Ua9ZadfEorI/AAAAAAAADhA/ebF25nyLAtE/s1600/we+are+purple+goldfish4.png", food.slice(4,7));
    const fishes = [Amy, Brandy, Bob, Lulu,Duke];
    return fishes;
  }
};

const data = dummyData.genfishes(dummyData.food);

function Fish(data) {
  this.favoriteFood = ko.observableArray(data.favoriteFood);
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.healthState = ko.pureComputed(function(){
  if (this.clickCount() < 3) {
    return "Hungry";
  } else if (this.clickCount() < 5) {
    return "Satisfy";
  } else {
    return "Obese";
  }
  }, this);
}

function ViewModel() {
  const self = this;
  this.fishList = ko.observableArray([]);
    _.each(data, function(fish){
   self.fishList.push(new Fish(fish));
  });
  this.currentFish = ko.observable(this.fishList()[0]);
  this.changeFish = function(current) {
    self.currentFish(current)
  }
  this.incrementCounter = function() {
    this.currentFish().clickCount(this.currentFish().clickCount() + 1);
  }.bind(this);
}

ko.applyBindings(new ViewModel());
