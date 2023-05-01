
// User will be able to add and remove Checklist Arts
// Search by name, nationality, title etc.
// Collect the Liked ones into Liked Checklist then remove some of the liked ones

// GETing data

let getID = document.querySelector("#getButton")
let termEnter = document.querySelector(`#enterTerm`)

getID.addEventListener('click', async function(event){
  event.preventDefault()
  let url = `https://collectionapi.metmuseum.org/public/collection/v1/search?isOnView=true&hasImages=true&artistOrCulture=true&q=${termEnter.value}`;
  let res = await fetch(url);
  let data = await res.json();
  console.log(termEnter.value)
  console.log(data[`objectIDs`]);

  // After figuring out the all IDs, check out a random ID's specific details (name, nationality, title, imagesmall)

  let objArry = data[`objectIDs`]
  let objLength = objArry.length
  let randomNumber = Math.floor(Math.random()*objLength)
  console.log(objArry.length)

  url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objArry[randomNumber]}`

  console.log(objArry[randomNumber])

  res = await fetch(url);
  data = await res.json();
  console.log(data)
  console.log(data[`artistDisplayName`])
  console.log(data[`artistNationality`])
  console.log(data[`title`])
  console.log(data[`primaryImageSmall`])

  // 이미 get한 데이터를 createElement하고 appendchild한다. To Checklist를 하면

  let artForm = document.querySelector(`form`)
  
  let searchedItem = document.querySelector(`#searchedItem`)
  let searchedImg = document.querySelector(`#searchedImg`)
  let toChecklist = document.querySelector(`#toChecklist`)
  let artName = document.createElement(`ol`)
  let artNation = document.createElement(`ol`)
  let artTitle = document.createElement(`ol`)
  let checkboxLabel = document.createElement(`label`)
  let artCheckbox = document.createElement(`input`)

  let checkedList = document.querySelector(`#checked`)

  

  artName.innerText = `Name: ${data[`artistDisplayName`]}`
  artNation.innerText = `Nationality: ${data[`artistNationality`]}`
  artTitle.innerText = `Title: ${data[`title`]}`
  searchedImg.src = data[`primaryImageSmall`]
  checkboxLabel.innerText = `To Checklist`
  artCheckbox.type = `checkbox`
  searchedItem.appendChild(artName)
  searchedItem.appendChild(artNation)
  searchedItem.appendChild(artTitle)
  toChecklist.appendChild(checkboxLabel)
  toChecklist.appendChild(artCheckbox)
  
  // 밑의 체크리스트로 array를 포함시키고 이 안에서 like를 하면


    artCheckbox.addEventListener(`click`, function(){
      checkedList.appendChild(artName)
      checkedList.appendChild(artNation)
      checkedList.appendChild(artTitle)
      checkedList.appendChild(checkboxLabel)
      checkedList.appendChild(artCheckbox)
    })
    
  //그 밑의 liked checklist의 array로 보내버린다. Remove는 차라리 to checklist와 like 버튼의 boolean을 가지고 판단해서 pop시키자.
    
})


// Abandoned 폐기물
// for (i=0; i < objArry.length ; i++){
  //   url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objArry[i]}`
  //   res = await fetch(url);
  //   data = await res.json();
  //   console.log(data)
  // }