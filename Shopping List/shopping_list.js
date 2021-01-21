
// Shopping list
function myList(){
var myList = [["chocolate",3],["teacake",5],["candy",20],["muffin",4],["biscuit",80]];
console.log(myList);
}

myList();

// Suma
function functionWithArgs(a,b){
    console.log(a + b);
  }
  
  functionWithArgs(8,2);

//Counting Cards casino (Blackjack)
var count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }

  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
/*Count Change	    Cards
+1	                2, 3, 4, 5, 6
0	                7, 8, 9
-1	                10, 'J', 'Q', 'K', 'A'*/

//Objeto perro
var myDog = {
    "name": "miki",
    "legs": 4,
    "tails": 1,
    "friends": ["Tom","Patrick"]   
  };


var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  // Only change code below this line
  
  var hatValue = testObj.hat;      // Change this line
  var shirtValue = testObj.shirt;    // Change this line

  //busqueda de objetos
  var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
  };
  function checkObj(checkProp) {
    // Your Code Here
    return myObj[checkProp] || "Not Found";
    
  }
  // Test your code by modifying these values
  checkObj("gift");

  //Entrar en objetos. Hace falta [""] cuando el objeto tiene espacios en medio
  // Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

//nueva información a array
// Setup
var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [ 
      "Let It Rock", 
      "You Give Love a Bad Name" 
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [ 
      "1999", 
      "Little Red Corvette" 
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": [ ]
  },
  "5439": {
    "album": "ABBA Gold"
  }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
// Setup
var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [ 
      "Let It Rock", 
      "You Give Love a Bad Name" 
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [ 
      "1999", 
      "Little Red Corvette" 
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": [ ]
  },
  "5439": {
    "album": "ABBA Gold"
  }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
if(prop === "tracks" && value !== ""){
  if(collection[id][prop]){
    collection[id][prop].push(value);
  }else{
    collection[id][prop] = [value];
  }
}
else if( value !== ""){
  collection[id][prop] = value;
}else{
  delete collection[id][prop];
}


return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");


//Añadir cadena al array
var myArray = [];

// Only change code below this line.
var i = 0;
while(i<4){
  myArray.push(i);
  i++;
}


//Setup
var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(name, prop){
// Only change code below this line
var contact;
  
for (var i=0; i<contacts.length; i++) {
  if (contacts[i].firstName === firstName) {
    contact = contacts[i];
    break;
  }
}

if (contact) {
  if (contact.hasOwnProperty(prop)) {
    return contact[prop];
  } else {
    return "No such property";
  }
} else {
  return "No such contact";
}
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");


//Cantidades al azar con unos numeros prestablecidos
// Example
// Example
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax-myMin+1))+myMin; // Change this line

}

// Change these values to test your function
var myRandom = randomRange(5, 15);

//Convertir de string a int
function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");

//Concat
const myConcat = (arr1, arr2) =>  arr1.concat(arr2);

// test your code
console.log(myConcat([1, 2], [3, 4, 5]));