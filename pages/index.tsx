import { useState } from 'react'
import styled from 'styled-components'
import { DUMMY_PORTFORLIO } from '../dummy'
import Work from '../components/Work'

const NIGHT_BACKGROUND_COLOR = 'rgb(23, 24, 41)'
const DAY_BACKGROUND_COLOR = 'rgb(244, 235, 225)'

type ContainerProps = {
  isNight: boolean
}
const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  height: calc(100vh - 62px);
  padding: 20px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .text-header {
    margin: 20px 0px;
    font-size: 30px;
    transition: color 200ms ease;
    color: ${(props) => (props.isNight ? '#ffffff' : NIGHT_BACKGROUND_COLOR)};
  }
  .text {
    margin: 10px 0px;
    font-size: 15px;
    transition: color 200ms ease;
    color: ${(props) => (props.isNight ? '#ffffff' : NIGHT_BACKGROUND_COLOR)};
  }

  .img-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 20px 0px;
    width: 100%;
  }

  .portfolio-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`

type ReflectImageProps = {
  image: string
  isNight: boolean
}
const ReflectImage = styled.div<ReflectImageProps>`
  display: flex;
  margin: 0px 20px;
  border-radius: 10px;
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.8),
    0px 2px 8px rgba(255, 255, 255, 0.5);
  background-image: url('${(props) => props.image}');
  background-size: cover;
  background-repeat: no-repeat;
  width: 200px;
  height: 200px;
  position: relative;
  transition: transform 200ms ease, box-shadow 200ms ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.8),
      0px 2px 16px rgba(255, 255, 255, 0.7);
  }
  &::after {
    content: '';
    background-image: inherit;
    width: 100%;
    height: 40%;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    bottom: -60%;
    transform: scaleY(-1);
    background-position: bottom;
  }

  &::before {
    content: '';
    width: 100%;
    height: 40%;
    position: absolute;
    bottom: -60%;
    background: linear-gradient(
      to bottom,
      rgba(23, 24, 41, 0.3),
      ${(props) =>
        props.isNight ? NIGHT_BACKGROUND_COLOR : DAY_BACKGROUND_COLOR}
    );
    z-index: 1;
  }
`
export default function Home() {
  const [portforlioList] = useState(DUMMY_PORTFORLIO)
  const [isNight] = useState(true)

  return (
    <Container isNight={isNight}>
      <div className="text-header">안녕하세요 이찬호입니다</div>
      <div className="text">프론트엔드 개발자입니다.</div>
      <div className="text">
        ReactJs와 nextJs를 이용한 페이지입니다. next진짜 최고네요.
      </div>
      <div className="text">
        react쓰시는분들은 무조건 next 쓰는걸 추천합니다.
      </div>
      <div className="portfolio-wrapper">
        {portforlioList.map((port) => {
          return <Work key={port.id} {...port}></Work>
        })}
      </div>
    </Container>
  )
}
