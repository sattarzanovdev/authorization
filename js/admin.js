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
          <button class="edit" onclick="Edit(${id})">Edit</button>
          <button class="delete" onclick="Delete(${id})">Delete</button>
        </div>
      </div>
    `


  }).join('')


  $container.innerHTML = card
}

function Delete(idOfBase){
  const persons = JSON.parse(localStorage.getItem('persons'))

  const filtered = persons.filter(({id}) => id !== idOfBase)

  localStorage.setItem('persons' , JSON.stringify(filtered))
  window.location.reload()
}

const $back = document.querySelector('.back')

$back.addEventListener('click', e => {
  e.preventDefault()

  window.open('./content.html', '_self')
})

function Edit(idOfBase) {
  const ask = prompt('What u want to change?')
  if(ask == 'name'){
    const persons = JSON.parse(localStorage.getItem('persons'))

    const edited = persons.map(item => {
      if(item.id == idOfBase){
        item.name = prompt('New name', item.name)
        return item
      }else{
        return item
      }
    })

    localStorage.setItem('persons', JSON.stringify(edited))
    window.location.reload()
  }else if(ask == 'image'){
    const persons = JSON.parse(localStorage.getItem('persons'))

    const edited = persons.map(item => {
      if(item.id == idOfBase){
        item.image = prompt('New image', item.image)
        return item
      }else{
        return item
      }
    })

    localStorage.setItem('persons', JSON.stringify(edited))
    window.location.reload()
  }else if(ask == 'last name'){
    const persons = JSON.parse(localStorage.getItem('persons'))

    const edited = persons.map(item => {
      if(item.id == idOfBase){  
        item.lastName = prompt('New last name', item.lastName)
        return item
      }else{
        return item
      }
    })

    localStorage.setItem('persons', JSON.stringify(edited))
    window.location.reload()
  }
}


const $add_person = document.querySelector('.ready')
const $name = document.querySelector('.name')
const $lastName = document.querySelector('.lastName')
const $age = document.querySelector('.age')
const $job = document.querySelector('.job')
const $image = document.querySelector('.image')
const $add = document.querySelector('.add')
const $add_drop = document.querySelector('.add-drop')

$add.addEventListener('click', e => {
  e.preventDefault()

  $add_drop.classList.toggle('active')
})

$add_person.addEventListener('click' , e => {
  e.preventDefault()

  if($name.value.length == 0 || $lastName.value.length == 0 || $age.value.length == 0 || $job.value.length == 0){
    if($name.value.length == 0){
      $name.style.borderColor = 'red'
    }else{
      $name.style.borderColor = 'green'
    }
    
    if($lastName.value.length == 0){
      $lastName.style.borderColor = 'red'
    }else{
      $lastName.style.borderColor = 'green'
    }

    if($image.value.length == 0){
      $image.style.borderColor = 'red'
    }else{
      $image.style.borderColor = 'green'
    }

    if($age.value.length == 0){
      $age.style.borderColor = 'red'
    }else{
      $age.style.borderColor = 'green'
    }

    if($job.value.length == 0){
      $job.style.borderColor = 'red'
    }else{
      $job.style.borderColor = 'green'
    }
  }else{
    const person = JSON.parse(localStorage.getItem('persons'))
    localStorage.setItem('persons', JSON.stringify(
      [
        ...person,
        {id: 1, name: $name.value, lastName: $lastName.value, age: $age.value, job: $job.value, image: $image.value}
      ]
    ))


    cardTemplate(base)
  }
  window.location.reload()
 
})

const $search_person = document.querySelector('.search')

$search.addEventListener('input', e => {
  const value = e.target.value.toUpperCase()
  const persons = JSON.parse(localStorage.getItem('persons'))

  const filtered = persons.filter(item => item.name.toUpperCase().includes(value))
  cardTemplate(filtered)
})

$search_person.addEventListener('input', e => {
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



const local = JSON.parse(localStorage.getItem('persons'))

console.log(local);