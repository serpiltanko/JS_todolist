// Array

let items = ['3 Litre Su İç', 'Ödevleri Yap', 'En Az 3 Saat Kodlama Yap', 'Yemek Yap', '50 Sayfa Kitap Oku']

const toasts = document.querySelectorAll("#liveToast")

// Create a List element and to do list function

let list = document.querySelector('#list')

function newElement(item) {

    // get the list element and the todo list 

    let li = document.createElement('li')
    let t = document.createTextNode(item)
    li.appendChild(t)
    list.appendChild(li)

    // create close function
    let span = document.createElement('span')
    let text = document.createTextNode('\u00D7') // create close button item
    span.className = 'close' // create close button
    span.appendChild(text)
    li.appendChild(span)

    // Remove checked symbol

    span.onclick = function () {
        let li = this.parentElement
        li.style.display = 'none'
    }
}


items.forEach(function (item) {

    newElement(item);

})

// add a check symbol for each list element

list.addEventListener('click', function (item) {

    if (item.target.tagName = 'li') {
        item.target.classList.toggle('checked')
    }
})

// create a new list item

document.querySelector('#liveToastBtn').onclick = function () {

    let item = document.querySelector('#task').value
    if (item === '') {
        $(toasts[1]).toast('show')   // show the toasts if the "task" is empty 
        return;
    }
    else {
        $(toasts[0]).toast('show') // show the toasts if the "task" is added in a list
    }
    newElement(item)
    document.querySelector("#task").value = '';
}

