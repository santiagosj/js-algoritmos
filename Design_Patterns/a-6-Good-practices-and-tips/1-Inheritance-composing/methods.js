/**
 * Inheritance Composing: Methods
 */

module.exports = {
    greet: name => console.log(`Holiiiis, soy ${name}!`),
  
    breath: name => {
      setInterval(() => {
        console.log(`${name} is breathing...`);
      }, 1500);
    }
  };
  