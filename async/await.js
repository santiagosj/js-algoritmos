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

  async function init(){
    await createPost({titulo: 'Post tres', body:'Este es el post tres'})

    getPosts();
  }

  init();

  async function fetchUsers(){
    await fetch('https://jsonplaceholder.typicode.com/users')

    const data= await res.json()

    console.log(data)
  }
  fetchUsers();