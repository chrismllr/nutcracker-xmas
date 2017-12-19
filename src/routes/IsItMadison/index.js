import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import * as Animated from 'animated/lib/targets/react-dom';

import { 
  Center,
  Title,
  Spacer,
  Flex,
  Button,
  LinkButton
} from '../../components';

const Key = styled.span`
  font-size: 120px;
`;

class IsItMadison extends React.Component {
  state = {
    title: new Animated.Value(0),
    button1: new Animated.Value(0),
    button2: new Animated.Value(0),
    key: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.spring(this.state.title, {
      toValue: 1
    }).start();

    setTimeout(() => Animated.spring(this.state.button1, {
      toValue: 1
    }).start(), 1400);

    setTimeout(() => Animated.spring(this.state.button2, {
      toValue: 1
    }).start(), 1460);
  }

  obviously = () => {
    Animated.spring(this.state.key, {
      toValue: 1
    }).start();

    setTimeout(() => {
      this.props.history.push('/let-me-tell-you');
    }, 2000);
  }

  render() {
    return (
      <div>
        <Center>
          <Animated.div
            style={{
              opacity: this.state.title,
              transform: [{ 
                translateY: this.state.title.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-400, 0]
                })
              }, {
                translateX: this.state.key.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -(window.innerWidth)]
                })
              }]
            }}
          >
            <Title>Are you Madison?</Title>
          </Animated.div>
        
          <Spacer marginBottom="50px" />

          <Flex direction="column" align="flex-start">
            <Animated.div
              style={{
                opacity: this.state.button1,
                transform: [{
                  rotate: this.state.button1.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['2deg', '0deg']
                  })
                }, {
                  scale: this.state.button1.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.9, 1]
                  })
                }, {
                  translateX: this.state.key.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -(window.innerWidth)]
                  })
                }]
              }}
            >
              <Button onClick={this.obviously}>
                Obviously.
              </Button>
            </Animated.div>

            <Spacer marginBottom="50px" />

            <Animated.div
              style={{
                opacity: this.state.button2,
                transform: [{
                  rotate: this.state.button2.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['2deg', '0deg']
                  })
                }, {
                  scale: this.state.button2.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.9, 1]
                  })
                }, {
                  translateX: this.state.key.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -(window.innerWidth)]
                  })
                }]
              }}
            >
              <LinkButton to="/go-away">
                Nope. How did I get here?
              </LinkButton>
            </Animated.div>
          </Flex>
        </Center>

        
        <Animated.div
          style={{
            position: 'fixed',
            top: '50%',
            right: this.state.key.interpolate({
              inputRange: [0, 1],
              outputRange: ['-50%', '50%']
            }),
            transform: [{
              translateX: '50%'
            }, {
              translateY: '-50%'
            }]
          }}
        >
          <Key role="img" aria-label="key">🔑</Key>
        </Animated.div>
      </div>
    )
  }
}

export default withRouter(IsItMadison);