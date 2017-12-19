import React from 'react';
import styled, { css } from 'styled-components';
import * as Animated from 'animated/lib/targets/react-dom';

import { Title, Text, Flex, Spacer, Body, Center } from '../../components';

const Ticket = styled.span`
  font-size: 124px;
  display: block;
  transform: rotate(90deg);
`;

const Plane = styled.span`
  font-size: 30px;
  display: block;
  margin-left: 20px;
`;

const NuttyTitle = styled(Title)`
  white-space: nowrap;
`;

const Banner = styled.div`
  padding: 15px;
  background-color: ${props => props.degrees === 5
    ? '#f8f8f8;'
    : '#efefef;'
  }
  
  ${props => css`
    transform: skewY(${props.degrees}deg);
  `}
`;

export default class GoAway extends React.Component {
  state = {
    ticketIn: new Animated.Value(0),
    ticketSpread: new Animated.Value(0),
    flyBy: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.timing(this.state.ticketIn, {
      toValue: 1,
      duration: 1000
    }).start();

    setTimeout(() => {
      Animated.spring(this.state.ticketSpread, {
        toValue: 1
      }).start();
    }, 2000);

    Animated.timing(this.state.flyBy, {
      duration: 50000,
      toValue: 1
    }).start()
  }

  render() {
    return (
      <div>
        <Center>
          <Animated.div 
            style={{
              opacity: this.state.ticketIn,
              transform: [{
                translateY: this.state.ticketSpread.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -260],
                })
              }]
            }}
          >
            <Animated.div
              style={{
                transformOrigin: 'bottom',
                transform: [{
                  rotate: this.state.ticketSpread.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '10deg'],
                  })
                }]
              }}
            >
              <Center>
                <Ticket role="img" aria-label="ticket">🎟</Ticket>
              </Center>
            </Animated.div>

            <Animated.div
              style={{
                transformOrigin: 'bottom',
                transform: [{
                  rotate: this.state.ticketSpread.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '-10deg'],
                  })
                }]
              }}
            >
              <Center>
                <Ticket role="img" aria-label="ticket">🎟</Ticket>
              </Center>
            </Animated.div>
          </Animated.div>

          <Animated.div
            style={{
              opacity: this.state.ticketSpread
            }}
          >
            <Center>
              <Text>
                Texas Ballet Theater Presents:
              </Text>
              <NuttyTitle>
                The Nutcracker
              </NuttyTitle>
              <Spacer marginBottom="16px" />
              <Body>
                Bass Hall Performance Center
              </Body>
              <Body>
                Friday, December 22 @ 8PM
              </Body>
            </Center>
          </Animated.div>
        </Center>

        <Animated.div
          style={{
            position: 'fixed',
            top: '85%',
            left: this.state.flyBy.interpolate({
              inputRange: [0, 1],
              outputRange: [-500, window.innerWidth + 500]
            })
          }}
        >
          <Flex align='center'>
            <Banner degrees={5}>
              Merry
            </Banner>
            <Banner degrees={-5}>
              Christmas
            </Banner>
            <Banner degrees={5}>
              Boo.
            </Banner>
            <Banner degrees={-5}>
              -Christofferson
            </Banner>

            <Plane role="img" aria-label="Plane">🛩</Plane>
          </Flex>
        </Animated.div>
      </div>
    )
  }
}