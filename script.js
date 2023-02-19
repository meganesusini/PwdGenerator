// array containing lowercase letters
let alphabet_lower = [];
for (let i = 97; i <= 122; i++) {
  alphabet_lower.push(String.fromCharCode(i));
}

// generate a random lowercase letter
Math.floor(Math.random() * alphabet_lower.length);

// array containing uppercase letters
let alphabet_upper = [];
for (let i = 65; i <= 90; i++) {
  alphabet_upper.push(String.fromCharCode(i));
}

// generate a random uppercase letter
Math.floor(Math.random() * alphabet_upper.length);

// array containing special characters
let speCharacters = [];
for (let i = 33; i <= 47; i++) {
  speCharacters.push(String.fromCharCode(i));
}
for (let i = 58; i <= 64; i++) {
  speCharacters.push(String.fromCharCode(i));
}
for (let i = 91; i <= 96; i++) {
  speCharacters.push(String.fromCharCode(i));
}
for (let i = 123; i <= 126; i++) {
  speCharacters.push(String.fromCharCode(i));
}

// generate a random special character
Math.floor(Math.random() * speCharacters.length);

// array containing numbers
let numbers = [];
for (let i = 0; i < 10; i++) {
  numbers.push(i);
}

// generate a random number
Math.floor(Math.random() * numbers.length);

// returns the size value
// console.log(document.getElementById("size").value);


document.getElementById("button").onclick = function() {
  console.log("onclick button");
  let allChararctersList = [];
  console.log("allCharactersList = " + allChararctersList);
  // add the options checked in a list
  // document.getElementById("lowLet").onchange = function() {
    if(document.getElementById("lowLet").checked) {
      console.log("lowLet checked");
      allChararctersList = allChararctersList.concat(alphabet_lower);
      console.log(allChararctersList);
    }
  // };
  // document.getElementById("upLet").onchange = function() {
    if(document.getElementById("upLet").checked) {
            console.log("upLet checked");
      allChararctersList = allChararctersList.concat(alphabet_upper);
      console.log(allChararctersList);
    }
  // };
  // document.getElementById("speChar").onchange = function() {
    if(document.getElementById("speChar").checked) {
            console.log("speChar checked");
      allChararctersList = allChararctersList.concat(speCharacters);
      console.log(allChararctersList);
    }
  // };
  // document.getElementById("nb").onchange = function() {
    if(document.getElementById("nb").checked) {
            console.log("nb checked");
      allChararctersList = allChararctersList.concat(numbers);
      console.log(allChararctersList);
    }
  // };
  // create a random pwd
  let pwd = "";
  for (let i=0; i<document.getElementById("size").value; i++) {
    pwd += allChararctersList[Math.floor(Math.random() * allChararctersList.length)];
  }
  document.getElementById("pwd").value = pwd;
};

