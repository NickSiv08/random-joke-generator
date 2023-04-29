const btn = document.getElementById('joke-btn')
const div = document.getElementById('joke')

div.innerHTML = 'Press the button to get a joke'

function getRandomJoke() {
  const xhr = new XMLHttpRequest()

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random')

  div.innerHTML = 'Loading...'

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const joke = JSON.parse(this.responseText)
      div.innerHTML = `${joke.value}`
    } else {
      div.innerHTML = 'Something Went Wrong (Not Funny)'
    }
  }

  xhr.send()
}

btn.addEventListener('click', getRandomJoke)
