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
var styles = require('./styles');
var React = require('react');
import {View} from 'react-native-animatable';
var sounds = require('./sounds');

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

    if (clicked && this.start.userTurn) {
      numberOfClicks = 0;
      this.setState({ gameClicks: gmclicks, startButtonText: 'Restart', score: 0 },
        function () {
          this.animateRound();
        });
    } else {
      if (clicked)
        userClicks = [];
      else
        numberOfClicks = 0;
      this.setState({ gameClicks: gmclicks, startButtonText: 'Restart' },
        function () {
          this.animateRound();
        });
    }
  }

  animateRound() {
    var _this = this;
    var length = this.state.gameClicks.length;
    if (this.state.gameClicks && (this.state.gameClicks.length > 0)) {
      for (var ind = 0; ind < length; ind++) {
        var element = this.state.gameClicks[ind].toString();
        var index = ind;
        var delay = ind * (this.state.gameClicks.length<7?700:400);
        switch (element) {
          case '1':
            setTimeout(function () {
              _this.refs.view1.pulse(400);
              sounds[0].play();
            }, delay);
            break;
          case '2':
            setTimeout(function () {
              _this.refs.view2.pulse(400);
              sounds[1].play();

            }, delay);

            break;
          case '3':
            setTimeout(function () {
              _this.refs.view3.pulse(400);
              sounds[2].play();
            }, delay);

            break;
          case '4':
            setTimeout(function () {
              _this.refs.view4.pulse(400);
              sounds[3].play();
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
      sounds[0].play();
    } else if (button == 2) {
      sounds[1].play();
    } else if (button == 3) {
      sounds[2].play();
    } else {
      sounds[3].play();
    }
    userClicks.push(button);
    
    if (this.state.userTurn) {
      if (numberOfClicks != (this.state.gameClicks.length - 1)) {
        if (userClicks[numberOfClicks] != this.state.gameClicks[numberOfClicks] && userClicks[numberOfClicks] != undefined) {
          this.pulseOnGameOver();
          userClicks = [];
          numberOfClicks = 0;
          this.setState({ startButtonText: 'Start', score: 0, userTurn: false, gameClicks: [] });
        } else
          numberOfClicks = numberOfClicks + 1;
      } else {
        for (var index = 0; index < this.state.gameClicks.length; index++) {
          var element = this.state.gameClicks[index];
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
                }, 1000);
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
    //gameOver
    sounds[4].play();


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
              <View  style={[styles.topLeftTrapezoid, styles.shadow]} />
            </View>
          </TouchableOpacity>
          <View style={styles.score}>
            <Text style={styles.scoreText}>Score: {this.state.score}</Text>
          </View>
          <TouchableOpacity id='2' style={styles.opacity}  activeOpacity={disabled ? 1 : 0.7} onPress={() => { !disabled ? this.randomColor(2) : null } }  ref={component => this._red = component}>
            <View ref="view2" >
              <View style={[styles.topRightTrapezoid, styles.shadow]} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity id='3'  style={styles.opacity} activeOpacity={disabled ? 1 : 0.7} onPress={() => { !disabled ? this.randomColor(3) : null } }  ref={component => this._yellow = component}>
            <View ref="view3" ><View  style={[styles.bottomLeftTrapezoid, styles.shadow]} /></View>
          </TouchableOpacity>
          <TouchableOpacity id='4'  style={styles.opacity} activeOpacity={disabled ? 1 : 0.7} onPress={() => { !disabled ? this.randomColor(4) : null } } ref={component => this._blue = component}>
            <View ref="view4"><View  style={[styles.bottomRightTrapezoid, styles.shadow]} /></View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('simonApp', () => simonApp);
