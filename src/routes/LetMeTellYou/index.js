import React from 'react';
import { withRouter } from 'react-router-dom';
import * as Animated from 'animated/lib/targets/react-dom';

import { 
  Center,
  Title,
  Gradient
} from '../../components';

class LetMeTellYou extends React.Component {
  state = {
    introAnim: new Animated.Value(0),
    transitionText: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.spring(this.state.introAnim, {
      toValue: 1
    }).start();

    setTimeout(() => {
      Animated.spring(this.state.transitionText, {
        toValue: 1
      }).start();
    }, 4000);

    setTimeout(() => {
      this.props.history.push('/bass-and-nuts');
    }, 8000)
  }

  render() {
    return (
      <div>
        <Center>
          <Animated.div
            style={{
              opacity: this.state.transitionText.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0]
              }),
              transform: [{
                translateY: this.state.transitionText.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -2000]
                })
              }]
            }}
          >
            <Title>So I hear you've got plans this Friday...</Title>
          </Animated.div>
        </Center>
        <Center>
          <Animated.div
            style={{
              opacity: this.state.transitionText,
              transform: [{
                translateY: this.state.transitionText.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-2000, 0]
                })
              }]
            }}
          >
            <Title>And I'm here to tell you...</Title>
          </Animated.div>
        </Center>

        <Animated.div
          style={{
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            position: 'fixed',
            opacity: this.state.introAnim,
            transform: [{
              rotate: this.state.introAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['20deg', '7deg']
              })
            }]
          }}
        >
          <Gradient />
        </Animated.div>
      </div>
    )
  }
}

export default withRouter(LetMeTellYou);