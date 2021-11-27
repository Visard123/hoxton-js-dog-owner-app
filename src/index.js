


   // Lets create a function for dogs in the list//
   function createDogList (puppies) {

    // Creating the elements of the header 

    const dogList= document.createElement('li')
    dogList.setAttribute('class','dogs-list__button' )
    dogList.textContent=puppies.name

     const ulListOfDogs= document.querySelector('.dogs-list')
     ulListOfDogs.append(dogList)

ulListOfDogs.addEventListener('click', function(){
  createDogCard(puppies)
})

   }

   for (const puppies of dogs ){
     createDogList(puppies)
   }

   // This is a fuction for dog card 
   function createDogCard(puppies) {

    const sectionOfDogs= document.querySelector('.main__dog-section')
    sectionOfDogs.innerHTML=''

const dogName= document.createElement('h2')
dogName.textContent=puppies.name 

const imageOfDog=document.createElement('img')
imageOfDog.setAttribute ('alt', '')
imageOfDog.setAttribute('src', puppies.image)

const theDescriptionOfDog= document.createElement('div')
theDescriptionOfDog.setAttribute ('class',"main__dog-section__desc" )

const bioOfDogs=document.createElement('h3')
bioOfDogs.textContent='Bio'

const paragraphOfDesc= document.createElement('p')
paragraphOfDesc.textContent='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum'
'minima voluptates libero cumque rerum consequatur optio aliquid sint'
'eum maxime illo laborum omnis quo ab rem cupiditate nulla'
'perspiciatis ipsum!'

theDescriptionOfDog.append(bioOfDogs,paragraphOfDesc)

const isNaughtyDog= document.createElement ('p')
const emElement= document.createElement('em')
emElement.textContent='Is Naughty '
isNaughtyDog.append(emElement, puppies.isGoodDog? 'No': 'Yes' )

const dogButton=document.createElement('button')
dogButton.textContent= puppies.isGoodDog? "Good dog ": "Bad dog"
       

dogButton.addEventListener('click', function(){
  toggleTheDog(puppies)
})

  sectionOfDogs.append( dogName, imageOfDog, theDescriptionOfDog, isNaughtyDog, dogButton) 

   }

   function toggleTheDog(puppies){
     puppies.isGoodDog = !puppies.isGoodDog
     createDogCard(puppies) 
   }


























