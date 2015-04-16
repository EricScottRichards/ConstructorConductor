/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

  var users = [];


//Now create and push into your users array 3 seperate instances of User using the data from above in that exact order

  users.push(new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS'))
  users.push(new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags'))
  users.push(new User('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup'))


//Console.log all of Tylers information

  User.prototype.printInfo = function(){
    console.log(this.name + '\'s info is ' + this.name, this.email, this.pw)
  }

  users[0].printInfo();



//Now console.log all of Lennys information

  users[2].printInfo();


//Now create another instance of User using your own information and then add that to your users array.

  users.push(new User('Eric', 'ericscottrichards@gmail.com', 'yourmom'))

//Now loop through your users Array and console.log every users name. 

  var allNames = function(arr){
    for (var i = 0; i < arr.length; i++){
      console.log(arr[i].name)
    }
  }

  allNames(users);