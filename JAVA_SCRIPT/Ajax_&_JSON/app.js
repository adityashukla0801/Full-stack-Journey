document.getElementById('button1').addEventListener('click',loadCustomer)

document.getElementById('button2').addEventListener('click',loadCustomers)

function loadCustomer(){
  const xhr = new XMLHttpRequest()

  xhr.open('GET', 'customer.json', true)

  xhr.onload = function(){
    if(this.status === 200){

      const customer = JSON.parse(this.responseText)

      document.getElementById('customer').innerHTML = `
      <ul>
      <li>ID: ${customer.id}</li>
      <li>NAME: ${customer.name}</li>
      <li>COMPANY: ${customer.company}</li>
      <li>PHONE: ${customer.phone}</li>
      </ul>
      `
    }
  }
  xhr.send()
}

function loadCustomers(){

  const xhr = new XMLHttpRequest()

  xhr.open('GET', 'customers.json', true)

  xhr.onload = function(){
    if(this.status === 200){

      const customers = JSON.parse(this.responseText)

      customers.forEach(function(customer){
        document.getElementById('customers').innerHTML += `
        <ul>
        <li>ID: ${customer.id}</li>
        <li>NAME: ${customer.name}</li>
        <li>COMPANY: ${customer.company}</li>
        <li>PHONE: ${customer.phone}</li>
        </ul>
        `
      })

     
    }
  }
  xhr.send()
}