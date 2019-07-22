const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

const [red, , ,green, , , ,blue] = things;
const colors = `List of Colors
1. ${red}
2. ${green}
3. ${blue}`;

console.log(colors);