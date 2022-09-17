import timeChanges from './timeChanges.js'
import controls from './controls.js'
import audio from './audio.js'
import events from './events.js'
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
  secondsOnScreen,
  timeRunning,
  minute,
  second,
  lastSong,
  darkModeButton,
  bodyDark,
  spanSelector
} from './elements.js'

let audioo = audio({ lastSong })

const controller = controls({
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
  coffeeShopButton,
  rainButton,
  forestButton,
  spanSelector
})

let time = timeChanges({
  minutesOnScreen,
  secondsOnScreen,
  timeRunning,
  minute,
  second,
  lastSong,
  playButton,
  pauseButton,
  setButton,
  stopButton
})

events({ controller, time, audioo })

// DEFAULT CLOCK STATE

controller.resetControls()
