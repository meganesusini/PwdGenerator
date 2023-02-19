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
