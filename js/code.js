// import * from './REST__API'
let root = document.querySelector(':root')
let btn = document.querySelector('#button__them')
const burger = document.querySelector('#burger')
const header = document.querySelector('header')

console.log(btn.textContent);

btn.addEventListener('click', (el)  => {
  event.preventDefault()
  root.classList.toggle('dark')
    if (btn.textContent === 'dark'){
      btn.innerHTML = 'white'
    }else{
      btn.innerHTML = 'dark'
    }

})


burger.addEventListener("click", (el)=>{
  header.classList.toggle('open');
})


