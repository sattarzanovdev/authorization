const identification = JSON.parse(localStorage.getItem('more'))

document.querySelector('.container').innerHTML = identification.map(({name, lastName, age, job, image}) => {
  return `
    <div class="card">
      <div class="card-image">
        <img src="${image}" style="height: 400px; object-fit: cover">
      </div>
      <div class="card-body">
        <h3><span>Name:</span> ${name}</h3>
        <h3><span>Last Name:</span> ${lastName}</h3>
        <h3><span>Age: </span>${age}</h3>
        <h3><span>Job:</span> ${job}</h3>
      </div>
    </div>
  `
})

const $back = document.querySelector('.back')

$back.addEventListener('click', e => {
  e.preventDefault()

  window.open('./content.html', '_self')
})