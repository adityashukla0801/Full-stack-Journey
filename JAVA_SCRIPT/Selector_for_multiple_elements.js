// Select by class name

let val = document.getElementsByClassName('collection-item')
console.log(val)

const lis = document.querySelector('ul').getElementsByClassName('collection-item')
console.log(lis)


// select item by TagName

let lisItem = document.getElementsByTagName('li')

lisItem[1].style.background = 'red'
lisItem[0].textContent = 'Hello'
lisItem = Array.from(lisItem)
lisItem.reverse()
lisItem.forEach(function(liitem, index) {
    console.log(liitem)
    liitem.textContent = `${index} : Hello`
})
console.log(lisItem)

// select item by querySelectorAll

const item = document.querySelectorAll('li')
item.forEach(function(li, index) {
    li.textContent = `${index} : Hello`
})

itemOdd = document.querySelectorAll('li:nth-child(odd')
itemOdd.forEach(function(li) {
    li.style.background = '#ccc'
    console.log(li)
})
console.log(item)