
var Sound = require('react-native-sound');
var sound1 = new Sound('tone1.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
  } 
});
var sound2 = new Sound('tone2.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
  }
});
var sound3 = new Sound('tone3.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
  } 
});
var sound4 = new Sound('tone4.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
  } 
});
var gameOver = new Sound('game_over.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
  } else { // loaded successfully
    console.log('duration in seconds: ' + gameOver.getDuration() +
      'number of channels: ' + gameOver.getNumberOfChannels());
  }
});

var sounds=[sound1,sound2,sound3,sound4,gameOver];
module.exports = sounds;

