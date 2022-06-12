// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const hearts = document.querySelectorAll('.like-glyph')

for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", function(e) {
    const target = e.target;
    mimicServerCall(target)
    .then(responder(target))
    .catch(error => errorFunc(error))
  })
}

function responder(target) {
  if (target.innerHTML === EMPTY_HEART) {
    target.classList.add("activated-heart")
    target.innerHTML = FULL_HEART;
  } else {
    target.classList.remove("activated-heart")
    target.innerHTML = EMPTY_HEART;
  }
  
}

function errorFunc(error) {
  const modal = document.getElementById("modal");
  modal.classList.remove("hidden");
  modal.innerHTML = error
  setTimeout(() => {
    modal.classList.add("hidden")
  }, '3000')
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
