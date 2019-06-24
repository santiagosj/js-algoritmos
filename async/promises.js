const posts = [
    {titulo: 'Post uno', body:'Este es el post uno'},
    {titulo: 'Post dos', body:'Este es el post dos'}
  ]
  
  function getPosts(){
    setTimeout(()=>{
      let output = '';
      posts.forEach((post, index)=>{
        output += `<li>${post.titulo}</li>`;
      });
      document.body.innerHTML=output
    }, 1000);
  }  
  
  function createPost(post){
     return new Promise((resolve,reject)=>{
        setTimeout(()=>{ 
            posts.push(post);
            const error = false;

            if(!error){
               resolve();
            }else{
                reject('Algo salió mal');
            }
        }, 2000);
     })
  }

 // createPost({titulo: 'Post tres', body:'Este es el post tres'})
   // .then(getPosts)
   //  .catch(err => console.log(err))

const promise1 = Promise.resolve('Hola Mundo');
const promise2 = 'un string';
const promise3 = new Promise((resolve, reject)=>setTimeout(resolve, 2000, 'Amo JavaScript'));
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

Promise.all([promise1,promise2,promise3,promise4])
  .then(values => console.log(values));