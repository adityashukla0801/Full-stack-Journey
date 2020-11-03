class EasyHttp{

  // Make HTTP Get Request
  async get(url){
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }


 // Make HTTP Post Request
 async post(url, data){
     const response = await fetch(url ,{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const resData = await response.json();
    return resData;
  }

  // Make HTTP Put Request
  async put(url, data){
      const response = await fetch(url ,{
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const resData = await response.json();
    return resData;
  }

   // Make HTTP Delete Request
   async delete(url){
  const response = await fetch(url ,{
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
    const resData = await 'Resource Deleted...';
    return resData;
  }


}