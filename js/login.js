const $email = document.querySelector('.email')
const $password = document.querySelector('.password')
const $login = document.querySelector('.login')
const $forget = document.querySelector('.forget')

$login.addEventListener('click', e => {
  e.preventDefault()

  if($email.value == JSON.parse(localStorage.getItem('email')) && $password.value == JSON.parse(localStorage.getItem('password'))){
    window.open('./content.html' , '_self')
  }else{
    $forget.innerHTML = 'Forgot your password?'
  }
})

