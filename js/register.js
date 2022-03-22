const base = [
{}
]


const $email = document.querySelector('.email')
const $password = document.querySelector('.password')
const $login = document.querySelector('.login')

$login.addEventListener('click', () => {
  if($email.value.length == 0 || $password.value.length == 0){
    if($email.value.length == 0){
      $email.style.borderColor = 'red'
    }
    if($password.value.length == 0){
      $password.style.borderColor = 'red'
    }
  }else{
    localStorage.setItem('email', JSON.stringify($email.value))
    localStorage.setItem('password', JSON.stringify($password.value))
    // setTimeout(() => {
    //   window.open('login.html', '_self')
    // }, 2000);

    window.open('login.html', '_self')

    $email.style.borderColor = 'green'
  }
})

