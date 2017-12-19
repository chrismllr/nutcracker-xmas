import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const COLORS = {
  text: '#2D364A',
  secondary: '#A0326C',
  accent: '#C62468'
}

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Center = styled.div`
  position: fixed;
  padding: 2rem;

  ${props => props.horizontal && css`
    left: 50%;
  `}

  ${props => props.vertical && css`
    top: 50%;
  `}

  transform: translate3d(
    ${props => props.horizontal ? '-50%' : '0'}, 
    ${props => props.vertical ? '-50%' : '0'}, 
    0
  );

  ${props => !props.horizontal && !props.vertical && css`
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  `}
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};
`;

export const Spacer = styled.div`
  margin-bottom: ${props => props.marginBottom};
`;

export const Text = styled.h5`
  color: ${COLORS.text};
  font-size: 1.4vw;
  line-height: 1.5;
  margin: 0;
`;

export const Body = styled.p`
  color: ${COLORS.text};
  font-size: 1.1vw;
  line-height: 1.5;
  margin: 0;
`;

export const Title = styled.h1`
  color: ${COLORS.text};
  font-size: 4vw;
  line-height: 1.25;
  margin: 0;
`;

export const SubTitle = styled.h3`
  color: white;
  display: inline;
  background-color: ${COLORS.accent};
  font-style: italic;
  font-size: 2vw;
  line-height: 1;
  margin: 0;
  padding: 20px 40px;
  box-shadow: 10px 10px 0px 0px ${COLORS.secondary};
`;

export const Button = styled.button`
  border-radius: 10px;
  color: white;
  letter-spacing: 1px;
  padding: 20px 40px;
  font-size: 22px;
  display: 'inline-block';
  font-weight: 600;
  background-color: ${COLORS.secondary};
  text-decoration: none;
  font-family: 'Josefin Sans', sans-serif;
  appearance: none;
  border: none;

  &:hover {
    color: rgba(255,255,255,.8);
  }
`;

export const LinkButton = styled(Link)`
  border-radius: 10px;
  color: white;
  letter-spacing: 1px;
  padding: 20px 40px;
  font-size: 22px;
  display: 'inline-block';
  font-weight: 600;
  background-color: ${COLORS.secondary};
  text-decoration: none;
  font-family: 'Josefin Sans', sans-serif;
  appearance: none;
  border: none;

  &:hover {
    color: rgba(255,255,255,.8);
  }
`;

export const Gradient = styled.div`
  width: ${window.innerWidth * 2}px;
  height: ${window.innerWidth * 2}px;
  background-color: ${props => props.color || COLORS.accent};
  opacity: 0.1;
  position: fixed;
  top: 70%;
`