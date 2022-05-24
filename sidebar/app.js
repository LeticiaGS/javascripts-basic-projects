const btnToggle = document.querySelector('.sidebar-toggle')
const sidebar = document.querySelector('.sidebar')
const btnClose = document.querySelector('.close-btn')

btnToggle.addEventListener('click', () => {
  sidebar.classList.toggle('show-sidebar')
})

btnClose.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar')
})
