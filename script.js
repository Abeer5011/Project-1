

//
const addElements = document.querySelectorAll('.card-btn')
const mainCart = document.querySelector('.cart-elements')
const lastSection = document.querySelector('#delete')
const lastSection2 = document.querySelector('#add')

//functions
addElements.forEach(addNewElement => {
    addNewElement.addEventListener('click', function () {
        const newElements = addNewElement.parentElement
        const title = newElements.querySelector('.title').innerHTML

        const cartItem = `
        <div>
        <span>${title}</span>
    </div>`
        mainCart.innerHTML += cartItem
    })
})

lastSection.addEventListener('click', function () {
    mainCart.remove()
})

lastSection2.addEventListener('click', function () {
    alert(`We have recived your order,
It will be ready after 15mins
THANK You`)
})



