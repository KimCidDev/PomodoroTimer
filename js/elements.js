const playButton = document.querySelector('.playButton')
const pauseButton = document.querySelector('.pauseButton')
const stopButton = document.querySelector('.stopButton')
const setButton = document.querySelector('.setButton')
const volumeUpButton = document.querySelector('.increaseVolume')
const volumeDownButton = document.querySelector('.decreaseVolume')
const coffeeShopButton = document.querySelector('.coffeeShop')
const campfireButton = document.querySelector('.fire')
const rainButton = document.querySelector('.rain')
const forestButton = document.querySelector('.forest')
const darkModeButton = document.querySelector('.darkModeButton')
const bodyDark = document.body
const spanSelector = document.querySelectorAll('span')

const minutesOnScreen = document.querySelector('.minutesOnScreen')
const secondsOnScreen = document.querySelector('.secondsOnScreen')

let timeRunning

let minute = minutesOnScreen.textContent
let second = secondsOnScreen.textContent

let lastSong = []

export {
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
  secondsOnScreen,
  timeRunning,
  minute,
  second,
  lastSong,
  darkModeButton,
  bodyDark,
  spanSelector
}
