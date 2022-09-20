$(document).ready(function() {
  //this is an immediately invoked function expression (iife)
  //click on an image, get a message
 
});

function nameLength(name) {
  //if
  
  return "Your name is " + name.length + " letters long.";
}

function nameStart(name) {
  return "the first letter of your name is " + name[0];
}

function reverseName(name) {
  let arrName = name.split();

  //revName = 
}

function getSpiritAnimal(x) {
  //flow control: case switch, loop, if/then

  if (x.length < 3) {
    //execute some code

    return "you are slug!";
  }
  else if(x.length > 10) {
    return "you spirit animal is iguana";
  }
  else {
    return "you are nothing.";
  }
}