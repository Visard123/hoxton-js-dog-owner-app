console.log(data);

// WRITE YOUR CODE BELOW!

/*
</head>
<body>


  <header class="header">
    <h1>The Show Off Dog Owner's App</h1>
    <ul class="dogs-list">
      <li class="dogs-list__button dogs-list__button--add">+</li>
    </ul>
  </header>



  <main class="main">
    <section class="main__dog-section">
      <h2>No dogs ?!?</h2>
    </section>
  </main>



</body>
</html>    */





// header with the list of dogs 
const dogsList = document.querySelector(`.dogs-list`)


for(const dog of dogs){
    const dogsListItem = document.createElement(`li`)
    dogsListItem.setAttribute(`class`,`dogs-list__button`)
    dogsListItem.textContent = dog.name
    dogsList.append(dogsListItem)
}



// crating the dog card in the main 
function createDogCard (dog){

const mainDogCard = document.querySelector(`.main__dog-section`)
const dogName = document.createElement(`h2`)
    dogName.textContent = dog.name
const dogImg = document.createElement(`img`)
    dogImg.src = dog.image
const dogAttributes = document.createElement(`div`)
dogAttributes.setAttribute(`class`,`main__dog-section__desc`)


const h3El = document.createElement(`h3`)
    h3El.textContent= `Bio`
const dogBio = document.createElement(`p`)
    dogBio.textContent = dog.bio

dogAttributes.append(h3El, dogBio)

const isGoodDog = document.createElement(`p`)
    isGoodDog.textContent =  `Is naughty?`
    if(dog.isGoodDog){
        isGoodDog.textContent =  `Is naughty? No!`
        } else isGoodDog.textContent =  `Is naughty? Yes!`


const dogButton = document.createElement(`button`)
    dogButton.setAttribute(`class`,`main__dog-section__btn`)
    
    if(dog.isGoodDog){
    dogButton.textContent=`Bad dog`
    } else dogButton.textContent=`Good dog`


    mainDogCard.append(dogName, dogImg, dogAttributes, isGoodDog, dogButton)

    return mainDogCard

}

//Avoidind multiple cards in the same time 
const mainDogCard = document.querySelector(`.main__dog-section`)
const main = document.querySelector(`.main`)

const dogsListButtons = document.querySelectorAll(`.dogs-list__button`)

for (let i = 0; i < dogsListButtons.length; i++) {
    dogsListButtons[i].addEventListener('click', () => {
        while (mainDogCard.firstChild)(
            mainDogCard.removeChild(mainDogCard.firstChild)
        )
        main.append(createDogCard(dogs[i - 1]))
            console.log(dogsListButtons)
    })
}
