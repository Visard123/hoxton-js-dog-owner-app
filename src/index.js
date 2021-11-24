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
function createDogs() {
  

const headerEl=document.createElement("header")
headerEl.setAttribute('class', 'header')

const ulEl=document.createElement("ul")
ulEl.setAttribute('class', 'dog-list')

const liEl=document.createElement("li")
liEl.setAttribute('class', 'dogs-list__button')


 headerEl.append(ulEl, liEl, )


 const  headeElements= document.querySelector('.header')
 headeElements.append(headerEl)

}
createDogs()