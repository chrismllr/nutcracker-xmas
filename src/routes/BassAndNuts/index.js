import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import * as Animated from 'animated/lib/targets/react-dom';

import { 
  Center,
  Title,
  SubTitle,
  Spacer
} from '../../components';

const Jumbo = styled(Title)`
  font-size: 6vw;
  text-align: center;
`;

class BassAndNuts extends React.Component {
  state = {
    slamNuts: new Animated.Value(0),
    slamBass: new Animated.Value(0),
    leave1: new Animated.Value(0),
    leave2: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.spring(this.state.slamNuts, {
      toValue: 1
    }).start();

    setTimeout(() => {
      Animated.spring(this.state.slamNuts, {
        toValue: 0
      }).start();
      
      Animated.spring(this.state.slamBass, {
        toValue: 1
      }).start();
    }, 2000);

    setTimeout(() => {
      Animated.spring(this.state.leave1, {
        toValue: 1
      }).start();
    }, 4000);

    setTimeout(() => {
      Animated.spring(this.state.leave2, {
        toValue: 1
      }).start();
    }, 4050);

    setTimeout(() => {
      this.props.history.push('/tickets')
    }, 5000);

  }

  render() {
    return (
      <div>
        <Center horizontal>
          <Spacer marginBottom="15vh" />
          <Animated.div
            style={{
              transform: [{
                translateY: this.state.leave1.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -window.innerHeight/ 1.2]
                })
              }]
            }}
          >
            <SubTitle>
              GET READY TO
            </SubTitle>
          </Animated.div>
        </Center>

        <Center>
          <Animated.div
            style={{
              opacity: this.state.slamNuts,
              transform: [{
                scale: this.state.slamNuts.interpolate({
                  inputRange: [0, 1],
                  outputRange: [20, 1]
                })
              }]
            }}
          >
            <Jumbo>
              GET NUTS
            </Jumbo>
          </Animated.div>
        </Center>

        <Center>
          <Animated.div
            style={{
              opacity: this.state.slamBass,
              transform: [{
                scale: this.state.slamBass.interpolate({
                  inputRange: [0, 1],
                  outputRange: [20, 1]
                })
              }, {
                translateY: this.state.leave2.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -window.innerHeight/ 1.2]
                })
              }]
            }}
          >
            <Jumbo>
              IN THE BASS
            </Jumbo>
          </Animated.div>
        </Center>
      </div>
    )
  }
}

export default withRouter(BassAndNuts);