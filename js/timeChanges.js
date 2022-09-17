import audio from './audio.js'

export default function timeChanges({
  minutesOnScreen,
  secondsOnScreen,
  timeRunning,
  userChoice,
  lastSong,
  playButton,
  pauseButton,
  setButton,
  stopButton
}) {
  let audioo = audio({})

  let minutes = Number(minutesOnScreen.textContent)

  function resetClock() {
    currentTime(minutes, 0)
    clearTimeout(timeRunning)
  }

  function stopReset() {
    clearTimeout(timeRunning)
    currentTime(userChoice, 0)
    userChoice = minutesOnScreen.textContent
    return minutesOnScreen.textContent
  }

  function currentTime(minutes, seconds) {
    minutesOnScreen.textContent = String(minutes).padStart(2, '0')
    secondsOnScreen.textContent = String(seconds).padStart(2, '0')
  }

  function countDown() {
    timeRunning = setTimeout(function tiTac() {
      let minutes = Number(minutesOnScreen.textContent)
      let seconds = Number(secondsOnScreen.textContent)
      let isItEnd = minutes <= 0 && seconds <= 1

      if (isItEnd) {
        currentTime(minutes, seconds - 1)
        audioo.endSound()
        lastSong[lastSong.length - 1].pause()
        resetClock()
        playButton.classList.remove('hidden')
        pauseButton.classList.add('hidden')
        setButton.classList.remove('hidden')
        stopButton.classList.add('hidden')
        return
      }

      if (seconds <= 0) {
        seconds = 60
        --minutes
      }

      currentTime(minutes, seconds - 1)

      countDown()
    }, 1000)
  }

  function pauseTimer() {
    clearTimeout(timeRunning)
  }

  return {
    currentTime,
    countDown,
    pauseTimer,
    resetClock,
    stopReset
  }
}
