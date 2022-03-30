// listen to the whole page, if a key is pressed, pass that event to a function that renders predefined effects and sound
document.addEventListener("keydown",playAudio2)
// the whole html file is the "document"
document.addEventListener("touchstart",playAudio2)
document.addEventListener("click",playAudio2)

function playAudio(e){
  const audio = document.querySelector(`audio[data-key = ${e.key}]`)
  // the selected html part is an "element"
  // keyEvent.key returns the key's value. e.keycode is deprecated, so use e.key instead
  const key = document.querySelector(`div[data-key = ${e.key}]`)
  if (!audio || !key) return;
  key.classList.add('playing')
  audio.currentTime = 0
  audio.play()
}

/*
if we want to play on touch screen or use mouse, we cannot use keyEvent. How do we know which audio to play then? We can first detect the event target's data-key, then use that as a clue to find corresponding audio.
*/

function playAudio2(e){
  e.preventDefault()  //to prevent touchscreen device from double-playing
  let clue = e.target.dataset.key //target's data-key
  const audio = document.querySelector(`audio[data-key = ${clue}]`)
  // the selected html part is an "element"
  // keyEvent.key returns the key's value. e.keycode is deprecated, so use e.key instead
  const key = document.querySelector(`div[data-key = ${clue}]`)
  if (!audio || !key) return;
  key.classList.add('playing')
  audio.currentTime = 0
  audio.play()
}


/*
make visual effects back to normal after playing
*/
document.querySelectorAll('.key').forEach(key => key.addEventListener('transitionend', backToNormal))

function backToNormal(e){
  // if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing')
}
