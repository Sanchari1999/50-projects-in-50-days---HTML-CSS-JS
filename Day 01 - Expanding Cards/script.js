//Bring in all the panels.
//Create a variable called 'panels'\.
//querySelector allows us to select anything: paragraph, header, class, ID.
//We will have to use querySelectorAll because there are more than one panels.
//It puts all of the panels into a node list - similar to an array. 
const panels = document.querySelectorAll('.panel')

//We can loop through a nodelist just like an array. 
//forEach is a high order array method, these methods take in a function as an argument. 
//We need to pass in whatever we want to use for each iteration. 
panels.forEach((panel) => {
  //We want to have an event listener on each of the panels so that if we click it, something happens. 
  //Listen for a click. When that click happens, we are going to run a function. 
  panel.addEventListener('click', () => {
    //Whatever panel we click on, we want to add a class of active. 
    //panel.classList gives us a list of the classes. \
    //But we also have methods on this classlist object.
    //Example: add() - we can specifically add a class. 
    //Active is still on the other ones. It is expanding them, but it is not retracting the other ones. 
    //Before we put a class of active, we have to remove the class of active on all of the other ones. 
    removeActiveClasses()
    panel.classList.add('active')
  }) 
})

function removeActiveClasses() {
  //Since there are more than one panel, we are again going to loop through them and then remove all the active classes. 
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}

