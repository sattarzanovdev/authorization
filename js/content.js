const base = [
  {id: 1, name: 'Almaz', lastName: 'Eshimbekov', age: '21', job: 'Say "Есть такая тема"' , image: 'https://funduk.ua/upload/medialibrary/68d/68d84fca3d3d34f47c28a5f9f56e5cce.jpg'},
  {id: 1, name: 'Abdulkadyr', lastName: 'Instagramov', age: '21', job: 'Marketer', image: 'https://htstatic.imgsmail.ru/pic_image/a78de64b76d9ccab3a6b78c457b0a487/840/555/1905565/'},
  {id: 1, name: 'Suzanna', lastName: 'Bayasova', age: '19', job: 'Instagrammer', image: 'https://www.quasa.io/storage/images/news/6lan0iSs2bGrsDgDNrFHUoNjtx2jMa4RLP8TawcE.jpg'},
  {id: 1, name: 'Daniel', lastName: 'Sattarzanov', age: '14', job: 'Чала Freelancer', image: 'https://proforientator.ru/publications/articles/New%20Folder/blogger1.jpg'},
  {id: 1, name: 'Erlan', lastName: 'Kambarov', age: '19', job: 'Шарлатан', image: 'https://i.ytimg.com/vi/PYB1K3R9EII/hqdefault.jpg'},
  {id: 1, name: 'Ruslan', lastName: 'Batyrbekov', age: '18', job: 'Photographer кодов', image: 'https://info-profi.net/wp-content/uploads/2018/05/fotograf-700x400.jpg'}
]

const $container = document.querySelector('.container')
const $search = document.querySelector('.search')

const $select = document.querySelector('.select')


window.addEventListener('load' , () => {
  if(!localStorage.getItem('persons')){
    localStorage.setItem('persons', JSON.stringify(base))
  }else{
    const person = JSON.parse(localStorage.getItem('persons'))

    const personWithID = person.map((item, index) => {
      return {...item, id: index}
    })

    localStorage.setItem('persons', JSON.stringify(personWithID))

  }
})

window.addEventListener('load', cardTemplate(JSON.parse(localStorage.getItem('persons'))))

function cardTemplate(base) {
  const card = base.map(({id, name , lastName , image}) => {
    return `
      <div class="card">
        <div class="card-header">
          <h3>${name}</h3>
          <h3>${lastName}</h3>
        </div>
        <div class="card-body">
          <img src=${image}>
        </div>
        <div class="card-footer">
          <button class="more" onclick="more(${id})">More...</button>
        </div>
      </div>
    `


  }).join('')


  $container.innerHTML = card
}

$search.addEventListener('input', e => {
  const value = e.target.value.toUpperCase()
  const persons = JSON.parse(localStorage.getItem('persons'))

  const filtered = persons.filter(item => item.name.toUpperCase().includes(value))
  cardTemplate(filtered)
})


$select.addEventListener('change', e => {
  const selectValue = e.target.value

  if(selectValue == 'Name'){
    $search.setAttribute('placeholder', 'search by Name')
  }else if(selectValue == 'LastName'){
    $search.setAttribute('placeholder', 'search by Last name')
  }else if(selectValue == 'Age'){
    $search.setAttribute('placeholder', 'search by Age')
  }else if(selectValue == 'Job'){
    $search.setAttribute('placeholder', 'search by Job')
  }
})

$search.addEventListener('input', e => {
  const value = e.target.value.toUpperCase()

  const selectValue = $select.value
  const person = JSON.parse(localStorage.getItem('persons'))

  if(selectValue == 'Name'){
    const filtered = person.filter(item => item.name.toUpperCase().includes(value))
    cardTemplate(filtered)
  }else if(selectValue == 'LastName'){
    const filtered = person.filter(item => item.lastName.toUpperCase().includes(value))
    cardTemplate(filtered)
  }else if(selectValue == 'Age'){
    const filtered = person.filter(item => item.age.includes(value))
    cardTemplate(filtered);  
  }else if(selectValue == 'Job'){
    const filtered = person.filter(item => item.job.toUpperCase().includes(value))
    cardTemplate(filtered)
  }

})

const $bar = document.querySelector('.bar')
const $sideBar = document.querySelector('.sideBar')

$bar.addEventListener('click', e => {
  e.preventDefault()

  $sideBar.classList.toggle('active-sideBar')
  $bar.classList.toggle('active-bar')
})

const $change_input = document.querySelector('.change')
const $cardTemp = document.querySelector('.card')

$change_input.addEventListener('input', e => {
  const value = e.target.value

  $cardTemp.style.backgroundColor = value
})

const $add = document.querySelector('.add')

$add.addEventListener('click', e => {
  e.preventDefault()

  window.open('./admin.html' , '_self')
})


function more(id) {
  const persons = JSON.parse(localStorage.getItem('persons'))

  localStorage.setItem('more', JSON.stringify([persons[id]]))
  window.open('./more.html', '_self')
}


const $back_window = document.querySelector('.back')

$back_window.addEventListener('click', e => {
  e.preventDefault()

  window.open('./index.html', '_self')
})