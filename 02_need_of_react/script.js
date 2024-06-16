const basket1 = document.querySelector('.basket-1 span')
const basket2 = document.querySelector('.basket-2 span')

const totalApples = 10
let basket2Apples = 0
let basket1Apples = totalApples - basket2Apples

basket1.innerText = basket1Apples
basket2.innerText = basket2Apples

const leftButton = document.querySelector('.left-button')
const rightButton = document.querySelector('.right-button')

leftButton.addEventListener('click', () => {
    if (basket2Apples !== 0) {
        basket1Apples += 1
        basket1.innerText = basket1Apples

        basket2Apples -= 1
        basket2.innerText = basket2Apples
    }
    else {
        return
    }
})

rightButton.addEventListener('click', () => {
    if (basket1Apples !== 0) {
        basket2Apples += 1
        basket2.innerText = basket2Apples

        basket1Apples -= 1
        basket1.innerText = basket1Apples
    }
    else {
        return
    }
})
