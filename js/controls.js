export default function Controls({
  playButton,
  pauseButton,
  stopButton,
  setButton,
  volumeUpButton,
  volumeDownButton,
  bodyDark,
  minutesOnScreen,
  secondsOnScreen,
  campfireButton,
  rainButton,
  forestButton,
  coffeeShopButton,
  spanSelector
}) {
  function resetControls() {
    playButton.classList.remove('hidden')
    pauseButton.classList.add('hidden')
    setButton.classList.remove('hidden')
    stopButton.classList.add('hidden')
    volumeUpButton.classList.remove('hidden')
    volumeDownButton.classList.remove('hidden')
  }

  function playSwitch() {
    playButton.classList.add('hidden')
    pauseButton.classList.remove('hidden')
    setButton.classList.add('hidden')
    stopButton.classList.remove('hidden')
    volumeUpButton.classList.remove('hidden')
    volumeDownButton.classList.remove('hidden')
  }

  function pauseSwitch() {
    playButton.classList.remove('hidden')
    pauseButton.classList.add('hidden')
    setButton.classList.add('hidden')
    stopButton.classList.remove('hidden')
    volumeUpButton.classList.remove('hidden')
    volumeDownButton.classList.remove('hidden')
  }

  function stopSwitch() {
    playButton.classList.remove('hidden')
    pauseButton.classList.add('hidden')
    setButton.classList.remove('hidden')
    stopButton.classList.add('hidden')
    volumeUpButton.classList.add('hidden')
    volumeDownButton.classList.add('hidden')
  }

  function darkMode() {
    bodyDark.classList.add('darkMode')
    playButton.classList.add('darkMode')
    pauseButton.classList.add('darkMode')
    setButton.classList.add('darkMode')
    stopButton.classList.add('darkMode')
    volumeUpButton.classList.add('darkMode')
    volumeDownButton.classList.add('darkMode')
    campfireButton.classList.add('darkMode')
    rainButton.classList.add('darkMode')
    forestButton.classList.add('darkMode')
    coffeeShopButton.classList.add('darkMode')
    console.log(spanSelector)
    for (var i = 0; i < spanSelector.length; i++) {
      spanSelector[i].classList.add('darkMode')
    }
  }

  function lightMode() {
    bodyDark.classList.remove('darkMode')
    playButton.classList.remove('darkMode')
    pauseButton.classList.remove('darkMode')
    setButton.classList.remove('darkMode')
    stopButton.classList.remove('darkMode')
    volumeUpButton.classList.remove('darkMode')
    volumeDownButton.classList.remove('darkMode')
    campfireButton.classList.remove('darkMode')
    rainButton.classList.remove('darkMode')
    forestButton.classList.remove('darkMode')
    coffeeShopButton.classList.remove('darkMode')
    console.log(spanSelector)
    for (var i = 0; i < spanSelector.length; i++) {
      spanSelector[i].classList.remove('darkMode')
    }
  }

  return {
    resetControls,
    playSwitch,
    pauseSwitch,
    stopSwitch,
    darkMode,
    lightMode
  }
}
