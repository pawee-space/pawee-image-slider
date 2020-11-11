import styled from 'styled-components'
import { animated } from 'react-spring'

interface ContainerProps {
  width: string
  height: string
  bg: string
}

export const Fade = styled(animated.div)<ContainerProps>`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Roboto:wght@300&display=swap');

  position: absolute;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: inline-block;
  background: url(${(props) => props.bg}) no-repeat center;

  img {
    border-radius: 15px 15px 0 0;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    position: relative;
  }

  svg {
    position: relative;
    color: #663399;
    font-size: 50px;

    &:hover {
      color: #663399;
      cursor: pointer;
    }
  }

  .left {
    left: 0;
    margin: 17.6% 0 10% 6%;
  }

  .right {
    right: 0;
    margin: 17.6% 0 10% 78%;
  }

  div {
    position: relative;
    background: rgba(255, 255, 255, 0.5);
    display: flex;
    justify-content: center;
    left: 0;
    bottom: 0;
    padding-left: 10rem;
    width: Math(${(props) => props.width} - 10rem);
    height: 40%;
    flex-direction: column;

    h1 {
      font: 500 40px Poppins;
      margin: 0;
    }

    p {
      font: 300 20px Roboto;
      margin: 0;
    }

    a {
      background: #663399;
      margin-top: 10px;
      width: 100px;
      height: 20px;
      color: #ffffff;
      border-radius: 0.5rem;
      border: 0.2rem #663399 solid;
      transition: background-color 0.2s linear;
      text-decoration: none;
      padding: 0.7rem 1.5rem;
      text-align: center;
      box-sizing: unset;
      &:hover {
        cursor: pointer;
        background: #5c2e8a;
        color: #ffffff;
      }
    }
  }
`
export const Container = styled.div`
  position: relative;
  width: auto;
  height: auto;
`

export const IconLeft = styled.img`
  position: relative;
  left: 0;
  bottom: 0;
  margin: 0 0 30rem 6rem;
`
export const IconRight = styled.img`
  position: relative;
  right: 0;
  bottom: 0;
  margin: 0 6rem 30rem 0;
`
