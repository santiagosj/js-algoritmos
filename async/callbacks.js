//ejemplo-1
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

/*=====================================================================*/
//ejemplo-2
function each(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      console.log(array[i]);
    }
  }
}
function isPositive(n) {
  return n > 0;
};

each([-2, 7, 11, -4, -10], isPositive);

/*===================================================================*/
/*
forEach()
map()
filter()
*/
//ejemplo-3 forEach()

[1,5,4,2,3,6].forEach(function logImpar(n){
  if(n % 2 !== 0){
    console.log(n)
  }
});

//ejemplo-4 map()

const musicData = [
  {
   artist:'Stars of the Lids',album:'Gravitational Pull vs The Desire for an Aquatic Life',likes:85186
  },
  {
    artist:'Cristina Vantzou',album:'Nº1',likes:12525
  },
  {
    artist:'Steve Legget',album:'Bathhouse',likes:20393
  },
  {
    artist:'Alessandro Cortini',album:'Avanti',likes:34265
  },
  {
    artist:'Sarah Davachi',album:'All My Circles Run',likes:24804
  },
  {
    artist:'Akira Ito ‎(伊藤詳)',album:'Marine Flowers',likes:193130
  },
  {
    artist:'Jan Jelinek',album:'Loop Finding Jazz Records',likes:1230327
  },
  {
    artist:'Deru',album:'1979', likes:3329763
  },
  {
    artist:'Adam Wiltzie & Christina Vantzou',album:'The Dead Texan',likes:82669
  },
  {
    artist:'Pan American',album:'Quiet City',likes:84960
  }
]

const musicArrayStringData = musicData.map(data => `${data.album} by ${data.artist} likes: ${data.likes.toString()}`)

console.log(musicArrayStringData)

//ejemplo-5 filter

const popular = musicData.filter(data => data.likes > 25000)

console.log(popular)