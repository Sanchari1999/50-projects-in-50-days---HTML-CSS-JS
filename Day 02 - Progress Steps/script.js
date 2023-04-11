//Importing from DOM
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle') //Since it is more than one, bring it in as nodelist


//Index - to represent whichever one is active
let currentActive = 1


//EventListeners
next.addEventListener('click', () => {
  currentActive++
  
  //Treating the nodelist circles as an array, it has length properties
  if(currentActive > circles.length) {
    currentActive = circles.length
  }
  //We want to keep it within its boundaries, it must not go past 4
  update() //Update the DOM
})

prev.addEventListener('click', () => {
  currentActive--
  
  if(currentActive < 1) {
    currentActive = 1
  }
  
  update()
})


function update() {
  circles.forEach((circle, idx) => {
    //Checking for each circle
    if(idx < currentActive ) {
      //Add active class onto it
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })
  
  const actives = document.querySelectorAll('.active')
  
  //Making the lines chage color as well
  progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
  //We want to get a percentage for our progress width, change it from 0% to more as we click the next button 
  //Dividing actives.length - 1 / circles.length - 1 provides us with the percentage of progress (33%)
  
  
  if(currentActive == 1) {
    prev.disabled = true
  } else if(currentActive == circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}


