export default function ({lastSong}) {
  let allAudio = new Audio('')
  let musicList = ['coffeeShop.mp3', 'campfire.mp3', 'rain.mp3', 'forest.mp3']

  function switchSound() {
    allAudio.pause()
    allAudio = new Audio(lastSong[lastSong.length - 1].currentSrc)
    lastSong.push(allAudio)
    lastSong[lastSong.length - 1].play()
  }

  function switchAmbientSound(name) {
    allAudio.pause()
    allAudio = new Audio('Assets/audio/' + name)
    lastSong.push(allAudio)
    lastSong[lastSong.length - 1].play()
  }

  function randomMusic() {
    let randomNumber = Math.floor(Math.random() * 5)
    allAudio = new Audio('Assets/audio/' + musicList[randomNumber])
    allAudio.play()
  }

  function stopMusic() {
    lastSong[lastSong.length - 1].pause()
    allAudio.pause()
  }

  function increaseVolume() {
    allAudio.volume = allAudio.volume + 0.1
  }

  function decreaseVolume() {
    allAudio.volume = allAudio.volume - 0.1
  }



  function playRandomSave() {
    randomMusic()
    lastSong.push(allAudio)
    return lastSong
  }

  function endSound() {
    allAudio = new Audio('Assets/audio/endSound.mp3')
    allAudio.currentTime = 5
    allAudio.play()
  }

  return {
    switchSound,
    stopMusic,
    increaseVolume,
    decreaseVolume,
    randomMusic,
    playRandomSave,
    switchAmbientSound,
    endSound,
    lastSong,
    allAudio
  }
}
