const http = new EasyHttp

// Get User
http.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(err => console.log(err));

// Ceate User
const data = {
  name: 'Jhon Doe',
  username: 'jhondoe',
  email: 'jdo@gmail.com'
}

// // Post user
// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// // Update user
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Delete user
  // http.delete('https://jsonplaceholder.typicode.com/users/2')
  // .then(data => console.log(data))
  // .catch(err => console.log(err));