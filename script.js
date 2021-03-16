document.addEventListener('DOMContentLoaded', () => {

  let greenSect = document.querySelector('.diagram-green')

  setTimeout(() => {
    greenSect.classList.add('visible')
    console.log(1)
  }, 1500)

})
