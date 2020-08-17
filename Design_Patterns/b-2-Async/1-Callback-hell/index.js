/**
 * Callbacks (Hell)
 */

/**
 * - Example -
 * Resources download simulated with setTimeout
 */

(() => {
    setTimeout(() => {
      const recipesId = [159, 845, 265, 753, 101];
      console.log(`Recipes ID: ${recipesId}`);
  
      setTimeout(() => {
        const recipe = {
          title: 'Pizza!',
          publisher: 'Some Itialian person!'
        };
        console.log(`# ${recipe.title} by ${recipe.publisher}`);
  
        setTimeout(publisher => {
          const recipe = {
            title: 'Arroz con leche',
            publisher
          }
          console.log(`# ${recipe.title} by ${recipe.publisher}`);
  
          setTimeout(publisher => {
            const recipe = {
              title: 'Fideos con ketchup',
              publisher
            }
            console.log(`# ${recipe.title} by ${recipe.publisher}`);
          }, 1500, recipe.publisher);
        }, 1500, recipe.publisher);
      }, 1500);
    }, 1500);
  })();
  