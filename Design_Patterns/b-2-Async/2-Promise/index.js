/**
 * Promises
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

 getRecipesId.then(ids =>{
     console.log(ids);
     const id = ids[2];
     return getRecipe(id)
 }).then(recipe => {
     console.log(recipe)
     return getRelated('Santi')
 }).then(publisher => {
     console.log(publisher)
 }).catch(err => console.error(err))