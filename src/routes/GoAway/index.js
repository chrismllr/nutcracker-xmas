import React from 'react';
import styled from 'styled-components';
import * as Animated from 'animated/lib/targets/react-dom';

import { Title, Center } from '../../components';

const Finger = styled.span`
  font-size: 124px;
`;

export default class GoAway extends React.Component {
  state = {
    _anim: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.timing(this.state._anim, {
      toValue: 1,
      duration: 2000
    }).start();
  }

  render() {
    return (
      <div>
        <Center>
          <Animated.div 
            style={{
              opacity: this.state._anim.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0]
              })
            }}
          >
            <Title>Go away.</Title>
          </Animated.div>
        </Center>
        
        <Center>
          <Animated.div
            style={{
              transform: [
                { 
                  translateY: this.state._anim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [window.innerHeight / 1.5, 0]
                  })
                }
              ]
            }}
          >
            <Finger role="img" aria-label="go-away">🖕</Finger>
          </Animated.div>
        </Center>
      </div>
    )
  }
}