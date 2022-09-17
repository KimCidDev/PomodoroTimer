import {
  playButton,
  pauseButton,
  stopButton,
  setButton,
  volumeUpButton,
  volumeDownButton,
  coffeeShopButton,
  campfireButton,
  rainButton,
  forestButton,
  minutesOnScreen,
  minute,
  second,
  lastSong,
  darkModeButton,
  spanSelector,
  bodyDark
} from './elements.js'

export default function ({ controller, time, audioo }) {
  // ACTIONS
  let userChoice
  let evenodd = []

  playButton.addEventListener('click', function () {
    time.countDown()
    controller.playSwitch()
    if (lastSong.length > 0) {
      audioo.switchSound()
    } else {
      audioo.playRandomSave()
    }
  })

  pauseButton.addEventListener('click', function () {
    time.pauseTimer()
    controller.pauseSwitch()
    audioo.stopMusic()
  })

  stopButton.addEventListener('click', function () {
    controller.resetControls()
    time.pauseTimer()
    time.currentTime(userChoice || minute, second)
    audioo.stopMusic()
  })

  setButton.addEventListener('click', function () {
    userChoice =
      prompt('De quantos minutos você precisa?') || minutesOnScreen.textContent
    time.currentTime(userChoice, 0)
  })

  coffeeShopButton.addEventListener('click', function () {
    controller.playSwitch()
    audioo.switchAmbientSound('coffeeShop.mp3')
    time.pauseTimer()
    time.countDown()
  })

  campfireButton.addEventListener('click', function () {
    controller.playSwitch()
    audioo.switchAmbientSound('campfire.mp3')
    time.pauseTimer()
    time.countDown()
  })

  rainButton.addEventListener('click', function () {
    controller.playSwitch()
    audioo.switchAmbientSound('rain.mp3')
    time.pauseTimer()
    time.countDown()
  })

  forestButton.addEventListener('click', function () {
    controller.playSwitch()
    audioo.switchAmbientSound('forest.mp3')
    time.pauseTimer()
    time.countDown()
  })

  volumeUpButton.addEventListener('click', function () {
    audioo.increaseVolume()
  })

  volumeDownButton.addEventListener('click', function () {
    audioo.decreaseVolume()
  })

  darkModeButton.addEventListener('click', function () {
    evenodd.push('bergamota')
    console.log(evenodd)

    if (evenodd.length % 2 === 0) {
      controller.lightMode()
    } else {
      controller.darkMode()
    }
  })
}
