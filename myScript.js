// listen to the whole page, if a key is pressed, pass that event to a function that renders predefined effects and sound
document.addEventListener("keydown",playAudio)
// the whole html file is the "document"
document.addEventListener("touchstart",playAudio)
document.querySelectorAll('.key').forEach(key => key.addEventListener('transitionend', backToNormal))

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
function backToNormal(e){
  // if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing')
}
