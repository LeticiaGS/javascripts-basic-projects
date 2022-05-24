const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025']

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', () => {
  let randomNumber = getRamdomNumber()
  document.body.style.backgroundColor = colors[randomNumber]
  color.textContent = colors[randomNumber]
})

function getRamdomNumber() {
  return Math.floor(Math.random() * colors.length)
}
