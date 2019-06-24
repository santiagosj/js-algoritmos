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

function createPost(post, callback){
  setTimeout(()=>{ 
      posts.push(post);
      callback();
  },2000)
}

createPost({titulo:'Post tres',body:'Este es el post tres'}, getPosts)