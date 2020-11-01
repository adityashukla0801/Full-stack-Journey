const posts = [
  {title : 'post-1' , body: 'this is post one'},
  {title: 'post-2', body: 'this is post two'}
]
// function createPost(post){
//   setTimeout(function(){
//     posts.push(post)
//   }, 2000)
// }

// function getPost(){
//   setTimeout(function(){
//     let output = ''
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`
//     })
//     document.body.innerHTML = output;
//   }, 1000);
// }
// createPost({title: 'Post Three', body: 'This is post three'});

// getPost();

function createPost(post, callback){
  setTimeout(function(){
    posts.push(post)
    callback();
  }, 2000)
}

function getPost(){
  setTimeout(function(){
    let output = ''
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`
    })
    document.body.innerHTML = output;
  }, 1000);
}
createPost({title: 'Post Three', body: 'This is post three'},getPost);