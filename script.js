// array containing lowercase letters
let alphabet_lower = [];
for (let i = 97; i <= 122; i++) {
  alphabet_lower.push(String.fromCharCode(i));
}

// array containing uppercase letters
let alphabet_upper = [];
for (let i = 65; i <= 90; i++) {
  alphabet_upper.push(String.fromCharCode(i));
}

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

// array containing numbers
let numbers = [];
for (let i = 0; i < 10; i++) {
  numbers.push(i);
}

document.getElementById("button").onclick = function() {
  let allChararctersList = [];
  checked = 0;
  // add the options checked in a list
    if(document.getElementById("lowLet").checked) {
      checked += 1;
      allChararctersList = allChararctersList.concat(alphabet_lower);
    }
    if(document.getElementById("upLet").checked) {
      checked += 1;
      allChararctersList = allChararctersList.concat(alphabet_upper);
    }
    if(document.getElementById("speChar").checked) {
      checked += 1;
      allChararctersList = allChararctersList.concat(speCharacters);
    }
    if(document.getElementById("nb").checked) {
      checked += 1;
      allChararctersList = allChararctersList.concat(numbers);
    }
  // create a random pwd
  let pwd = "";
  if (allChararctersList.length != 0) {
    for (let i=0; i<document.getElementById("size").value; i++) {
      pwd += allChararctersList[Math.floor(Math.random() * allChararctersList.length)];
    }
  }
  document.getElementById("pwd").value = pwd;

  // displays the strength of the password
  if (checked < 1) {
    console.log(checked);
    document.getElementById("pwd-strength").innerHTML = "Check at least an option";
  }
  else if (checked < 2) {
    document.getElementById("pwd-strength").innerHTML = "Week";
    document.getElementById("pwd-strength").style.color = "red";
  }
  else if (checked < 4) {
    document.getElementById("pwd-strength").innerHTML = "Medium";
    document.getElementById("pwd-strength").style.color = "yellow";
  }
  else {
    document.getElementById("pwd-strength").innerHTML = "Strong";
    document.getElementById("pwd-strength").style.color = "green";
  }
};

// copy the password
document.getElementById("copyButton").onclick = function() {
  const textToCopy = document.getElementById("pwd").value;
  const copyButton = new ClipboardJS("#copyButton", {
    text: function() {
      return textToCopy;
    }
  });
  document.getElementById("textCopied").innerHTML = "Text copied !";
};