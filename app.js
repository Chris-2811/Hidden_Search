const btn = document.querySelector('.btn')
const container = document.querySelector('.container')
const input = document.querySelector('.input')

btn.addEventListener('click', (e)=> {
    container.classList.toggle('active')
    input.focus()

})