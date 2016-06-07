
'use strict';
import {
  StyleSheet
} from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  startView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  start: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
  },
  trapezoidView: {
    flex: 2,
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  topLeftTrapezoid: {
    position: 'absolute',
    left: 0,
    width: 200,
    height: 0,
    borderTopWidth: 100,
    borderRadius: 60,
    borderTopColor: 'green',
    borderLeftWidth: 50,
    borderLeftColor: 'transparent',
    borderRightWidth: 50,
    borderRightColor: 'transparent',
    borderStyle: 'solid',
    transform: [
      { rotate: '-45deg' }
    ],
    top: 0
  },
  score: {
    position: 'absolute',
    left: 125,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white',
    top: 75,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scoreText: {
    color: 'black',
    backgroundColor: 'transparent'
  },
  opacity: {
    position: 'absolute',
  },
  topRightTrapezoid: {
    position: 'absolute',
    left: 150,
    width: 200,
    height: 0,
    borderTopWidth: 100,
    borderRadius: 60,
    borderTopColor: 'red',
    borderLeftWidth: 50,
    borderLeftColor: 'transparent',
    borderRightWidth: 50,
    borderRightColor: 'transparent',
    borderStyle: 'solid',
    transform: [
      { rotate: '45deg' }
    ],
    top: 0
  },
  shadow: {
    //shadowColor: 'white',
    // shadowOffset: { width: 0.1, height: 0.1 },
    // shadowOpacity: 0.5,
    //shadowRadius: 2  
  },
  bottomLeftTrapezoid: {
    position: 'absolute',
    top: 150,
    width: 200,
    height: 0,
    borderTopWidth: 100,
    borderRadius: 60,
    borderTopColor: 'yellow',
    borderLeftWidth: 50,
    borderLeftColor: 'transparent',
    borderRightWidth: 50,
    borderRightColor: 'transparent',
    borderStyle: 'solid',
    transform: [
      { rotate: '225deg' }
    ],
  },
  bottomRightTrapezoid: {
    position: 'absolute',
    top: 150,
    left: 150,
    width: 200,
    height: 0,
    borderTopWidth: 100,
    borderRadius: 60,
    borderTopColor: 'blue',
    borderLeftWidth: 50,
    borderLeftColor: 'transparent',
    borderRightWidth: 50,
    borderRightColor: 'transparent',
    borderStyle: 'solid',
    transform: [
      { rotate: '-225deg' }
    ],
  }
});
