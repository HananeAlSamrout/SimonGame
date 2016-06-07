/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
  AppRegistry,
  Text,
  Alert,
  TouchableOpacity
} from 'react-native';
var styles=require('./styles');
var React = require('react');
var Sound = require('react-native-sound');
import {View} from 'react-native-animatable';
var sound1 = new Sound('tone1.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
  } else { // loaded successfully
    console.log('duration in seconds: ' + sound1.getDuration() +
      'number of channels: ' + sound1.getNumberOfChannels());
  }
});
var sound2 = new Sound('tone2.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
  } else { // loaded successfully
    console.log('duration in seconds: ' + sound2.getDuration() +
      'number of channels: ' + sound2.getNumberOfChannels());
  }
});
var sound3 = new Sound('tone3.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
  } else { // loaded successfully
    console.log('duration in seconds: ' + sound3.getDuration() +
      'number of channels: ' + sound3.getNumberOfChannels());
  }
});
var sound4 = new Sound('tone4.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
  } else { // loaded successfully
    console.log('duration in seconds: ' + sound4.getDuration() +
      'number of channels: ' + sound4.getNumberOfChannels());
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
var userClicks = [], numberOfClicks = 0;
class simonApp extends React.Component {

  constructor(props) {
    super(props);
    this.randomColor = this.randomColor.bind(this);
    this.animateRound = this.animateRound.bind(this);
    this.start = this.start.bind(this);
    this.state = {
      gameClicks: [],
      score: 0,
      userTurn: false,
      startButtonText: 'Start',

    };
  }
  start(clicked) {
    var gmclicks = [];
    var _this = this;
    var number = Math.floor((Math.random() * 4) + 1);
    if (!clicked) {
      gmclicks = this.state.gameClicks.slice();
    }
    gmclicks.push(number);

    if (clicked) {
      if (this.start.userTurn) {
        numberOfClicks = 0;
        this.setState({ gameClicks: gmclicks, startButtonText: 'Restart', score: 0 },
          function () {
            console.log('gameClicks:', this.state.gameClicks);
            this.animateRound();
          });
      }
      else {
        userClicks = [];
        this.setState({ gameClicks: gmclicks, startButtonText: 'Restart' },
          function () {
            console.log('gameClicks:', this.state.gameClicks);
            this.animateRound();
          });
      }


    } else {
      numberOfClicks = 0;
      this.setState({ gameClicks: gmclicks, startButtonText: 'Restart' },
        function () {
          console.log('gameClicks:', this.state.gameClicks);
          this.animateRound();
        });
    }

  }

  animateRound() {
    var _this = this;
    var playSound = _this.playSound;
    var length = this.state.gameClicks.length;
    console.log('length', length);
    if (this.state.gameClicks && (this.state.gameClicks.length > 0)) {
      for (var ind = 0; ind < length; ind++) {
        var element = this.state.gameClicks[ind].toString();
        // _this.refs['view' + _this.state.gameClicks[index].toString()].pulse(400);
        var index = ind;
        var delay = ind * 700;
        switch (element) {
          case '1':
            setTimeout(function () {
              _this.refs.view1.pulse(400);
              sound1.play();
            }, delay);
            break;
          case '2':
            setTimeout(function () {
              _this.refs.view2.pulse(400);
              sound2.play();

            }, delay);

            break;
          case '3':
            setTimeout(function () {
              _this.refs.view3.pulse(400);
              sound3.play();

            }, delay);

            break;
          case '4':
            setTimeout(function () {
              _this.refs.view4.pulse(400);
              sound4.play();

            }, delay);

            break;
        }

        if (index == (length - 1))
          setTimeout(function () {
            _this.setState({ userTurn: true });
          }, 400 + delay);
      }
    }
  }

  randomColor(button) {
    var _this = this;

    if (button == 1) {
      sound1.play();
    } else if (button == 2) {
      sound2.play();
    } else if (button == 3) {
      sound3.play();
    } else {
      sound4.play();
    }
    //var usrClicks = this.state.userClicks;
    //usrClicks.push(button);
    userClicks.push(button);
    console.log("usrClicks", userClicks);

    // this.setState({
    //   userClicks: usrClicks
    // },function(){

    if (this.state.userTurn) {
      console.log('numberOfClicks= ' + numberOfClicks);
      console.log('gameClicks= ' + (this.state.gameClicks.length));

      if (numberOfClicks != (this.state.gameClicks.length - 1)) {
        if (userClicks[numberOfClicks] != this.state.gameClicks[numberOfClicks] && userClicks[numberOfClicks] != undefined) {
          this.pulseOnGameOver();
          userClicks = [];
          numberOfClicks = 0;
          this.setState({ startButtonText: 'Start', score: 0, userTurn: false, gameClicks: [] });
        } else
          numberOfClicks = numberOfClicks + 1;
        // this.setState({ numberOfClicks: (this.state.numberOfClicks + 1) });
      } else {
        for (var index = 0; index < this.state.gameClicks.length; index++) {
          var element = this.state.gameClicks[index];
          //console.log('element= ' + element);
          //console.log('element user = ' + this.state.userClicks[index]);
          if (index == (this.state.gameClicks.length - 1)) {
            if (button != element) {
              this.pulseOnGameOver();
              userClicks = [];
              numberOfClicks = 0;
              this.setState({ startButtonText: 'Start', score: 0, userTurn: false });
              break;
            } else {
              userClicks = [];
              numberOfClicks = 0;
              this.setState({ score: (this.state.score + 1), userTurn: false }, function () {
                setTimeout(function () {
                  _this.start();
                }, 500);
              });
            }
            break;
          } else if (userClicks[index] != element) {
            this.pulseOnGameOver();
            userClicks = [];
            numberOfClicks = 0;
            this.setState({ startButtonText: 'Start', score: 0, userTurn: false });
            break;
          }
        }
      }
    }
  }

  pulseOnGameOver() {
    var _this = this;
    setTimeout(function () {
      _this.refs.view1.pulse(400);
    }, 0);
    setTimeout(function () {
      _this.refs.view2.pulse((400));
    }, 200);
    setTimeout(function () {
      _this.refs.view4.pulse(400);
    }, 400);
    setTimeout(function () {
      _this.refs.view3.pulse(400);
    }, 600);
    gameOver.play();

  }

  render() {
    var disabled = !this.state.userTurn;
    console.log('disabled', disabled);
    return (
      <View style={styles.container} >
        <TouchableOpacity style={styles.startView}  onPress={() => this.start(true) }>
          <Text style={styles.start}>{this.state.startButtonText}</Text>
        </TouchableOpacity>
        <View  style={styles.trapezoidView} >
          <TouchableOpacity id='1' style={styles.opacity}  activeOpacity={disabled ? 1 : 0.7} onPress={() => { !disabled ? this.randomColor(1) : null } } ref={component => this._green = component}>
            <View ref="view1" >
              <View  style={[styles.topLeftTrapezoid,styles.shadow]} />
            </View>
          </TouchableOpacity>
          <View style={styles.score}>
            <Text style={styles.scoreText}>Score: {this.state.score}</Text>
          </View>
          <TouchableOpacity id='2' style={styles.opacity}  activeOpacity={disabled ? 1 : 0.7} onPress={() => { !disabled ? this.randomColor(2) : null } }  ref={component => this._red = component}>
            <View ref="view2" >
              <View style={[styles.topRightTrapezoid,styles.shadow]} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity id='3'  style={styles.opacity} activeOpacity={disabled ? 1 : 0.7} onPress={() => { !disabled ? this.randomColor(3) : null } }  ref={component => this._yellow = component}>
            <View ref="view3" ><View  style={[styles.bottomLeftTrapezoid,styles.shadow]} /></View>
          </TouchableOpacity>
          <TouchableOpacity id='4'  style={styles.opacity} activeOpacity={disabled ? 1 : 0.7} onPress={() => { !disabled ? this.randomColor(4) : null } } ref={component => this._blue = component}>
            <View ref="view4"><View  style={[styles.bottomRightTrapezoid,styles.shadow]} /></View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('simonApp', () => simonApp);
