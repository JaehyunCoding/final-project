
// User will be able to add and remove Checklist Arts
// Search by name, nationality, title etc.
// Collect the Liked ones into Liked Checklist then remove some of the liked ones

// Queryselectors/Alls //

let searchInput = document.querySelector(`#searchInput`)
let mainSearch = document.querySelector(`#mainSearch`)
let searchedCard = document.querySelector(`#searchedCard`)

let divCard = document.querySelector(`.card`)
let imgSrc = document.createElement(`img`)
let divcardBody = document.createElement(`div`)

let h5Title = document.createElement(`h5`)

let pArtist = document.createElement(`p`)
let pCulture = document.createElement(`p`)
let pDepartment = document.createElement(`p`)

let aFavorites = document.createElement(`input`)
let aNext = document.createElement(`input`)

let favorited = document.querySelector(`#favorited`)
let divcard18 = document.createElement(`div`)
let aRemove = document.createElement(`input`)

// URLs //

// Arrays //
let arts = {}
let favoriteArts = {}

// Api Functions //

mainSearch.addEventListener(`click`, async (event) => {
  event.preventDefault()
  
    if(searchInput.value === ``){
      alert(`Please, enter any keywords`)
    } else{
      let url = `https://collectionapi.metmuseum.org/public/collection/v1/search?isOnView=true&q=${searchInput.value}`
  
      // console.log(url)
  
      let res = await fetch(url);
      let data = await res.json();
  
      arts = data[`objectIDs`]
      let objLength = arts.length
      let randomNumber = Math.floor(Math.random()*objLength)

      // console.log(arts.length)
  
      url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${arts[randomNumber]}`
  
      res = await fetch(url);
      data = await res.json();
      
      // console.log(url)
      // console.log(data)
      // console.log(data[`primaryImageSmall`])
      // console.log(data[`title`])
      // console.log(data[`artistDisplayName`])
      // console.log(data[`culture`])
      // console.log(data[`department`])

            
      if(`${data[`primaryImageSmall`]}` === ``){
        imgSrc.src = `./images/noimage.PNG`
        divCard.appendChild(imgSrc)
      } else {
        imgSrc.src = data[`primaryImageSmall`]
        divCard.appendChild(imgSrc)
      }

      divcardBody.classList.add(`card-body`)
      divCard.style = "width: 18rem;"
      divCard.appendChild(divcardBody)

      h5Title.classList.add(`card-title`)
      h5Title.innerText = data[`title`]
      divcardBody.appendChild(h5Title)
      
      pArtist.classList.add(`card-text`)
      pArtist.innerText = data[`artistDisplayName`]
      divcardBody.appendChild(pArtist)

      pCulture.classList.add(`card-text`)
      pCulture.innerText = data[`culture`]
      divcardBody.appendChild(pCulture)

      pDepartment.classList.add(`card-text`)
      pDepartment.innerText = data[`department`]
      divcardBody.appendChild(pDepartment)

      aFavorites.classList.add(`btn`)
      aFavorites.classList.add(`btn-primary`)
      // aFavorites.type = `submit`
      aFavorites.value = `Favorites`
      divcardBody.appendChild(aFavorites)
      
      aNext.classList.add(`btn`)
      aNext.classList.add(`btn-secondary`)
      // aNext.type = `submit`
      aNext.value = `Next`
      divcardBody.appendChild(aNext)

      aFavorites.addEventListener(`click`, () => {
        // event.preventDefault()

        divcard18.classList.add(`card`)
        divcard18.style = "width: 18rem;"

        favorited.appendChild(divcard18)
        divcard18.appendChild(imgSrc)
        divcard18.appendChild(divcardBody)
        
        divcardBody.removeChild(aFavorites)
        divcardBody.removeChild(aNext)

        aRemove.classList.add(`btn`)
        aRemove.classList.add(`btn-danger`)
        aRemove.value = `Remove`
        divcardBody.appendChild(aRemove)

        aRemove.addEventListener(`click`, () => {
          favorited.removeChild(divcard18)
        })
                
        
      })

    }})
    

    

  
    
  


// Event Listeners //

// App Functions //