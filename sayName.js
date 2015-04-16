//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  var person = function(name, age){
  	this.name = name;
  	this.age = age;
  }


//Now create three instances of Person with data you make up

  var eric = new person('Eric', 29);
  var fumi = new person('Fumiko', 31);
  var olive = new person('Olive', 5);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  person.prototype.sayName = function(){
  	alert(this.name)
  };

  olive.sayName();
