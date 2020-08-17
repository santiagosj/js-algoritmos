/**
 * Async/Await
 */

/**
 * - Example -
 * Resources download simulated with setTimeout.
 * Forget about the hardcoding.
 */

const getRecipesId = new Promise((resolve,reject)=>{
    try{
      setTimeout(()=>{
         resolve([159,845, 265, 753, 101])
      },1500)
    }catch(err){
        reject(err)
    }
});

const getRecipe = id => {
    return new Promise((resolve,reject)=>{
        try{
            setTimeout(_id => {
                const recipe = {
                    title: 'Fideos con Katchup',
                    publisher:'Santi'
                };
                resolve(`${_id}: ${recipe.title} by ${recipe.publisher}`)
            },1500,id);
        }catch(err){
            reject(err)
        }
    });
};

const getRelated = publisher => {
    return new Promise((resolve,reject)=>{
        try{
           setTimeout(_publisher => {
               const reicpe = {
                   title:'Pizza con roquefort y nueces',
                   publisher:'Santi'
               };
               resolve(`· More of ${_publisher}: ${recipe.title}`)
           },1500,publisher)
        }catch(err){
             reject(err)
        }
    })
}

async function getRecipes() {
    /**
   * - Warning! -
   * Mind that the first Promise call has no () on it.
   */

   const ids = await getRecipesId;
   const id = ids[2];

   const recipe = await getRecipe(id);
   console.log(recipe)

   const related = await getRelated('Santi')
   console.log(related)
}

/**
 * ☹️ This code will not work like this:
 * const result = getRecipes();
 * console.log(result);
 * It will return a pending Promise, not the result.
 */

/**
 * 😃 So this is the way to do it.
 */

 getRecipes()
  .then(result => console.log(`${result} rocks!`))
  .catch(err => console.error(err))