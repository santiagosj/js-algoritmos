
// 1-Imprimiendo los colores dentro de la lista.
const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

const [one, , ,two, , , ,three] = things;
const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;

console.log(colors);