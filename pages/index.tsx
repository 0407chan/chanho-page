import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import DayNightCheckBox from '../components/DayNightCheckBox'

const IMAGE_SOURCE = `/image/godchanho.gif`
const loveMonday1 = `/image/love-monday.png`
const loveMonday2 = `/image/love-monday2.png`
const NIGHT_BACKGROUND_COLOR = 'rgb(23, 24, 41)'
const DAY_BACKGROUND_COLOR = 'rgb(244, 235, 225)'

type ContainerProps = {
  isNight: boolean
}
const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  flex-direction: column;
  align-items: center;

  transition: background-color 200ms ease;
  background-color: ${(props) =>
    props.isNight ? NIGHT_BACKGROUND_COLOR : DAY_BACKGROUND_COLOR};

  .header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 20px;
    width: 100%;
    min-height: 60px;
  }

  .body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 60px;
    width: 100%;
    height: 100%;
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
    background-size: 100%;
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
  const [isNight, setIsNight] = useState(true)
  const toggleDayNight = () => {
    setIsNight(!isNight)
  }

  return (
    <Container isNight={isNight}>
      <Head>
        <title>ChrisPage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="header">
        <DayNightCheckBox
          isNight={isNight}
          toggleDayNight={toggleDayNight}
        ></DayNightCheckBox>
      </div>
      <div className="body">
        <div className="text-header">안녕하세요 이찬호입니다</div>
        <div className="text">프론트엔드 개발자입니다.</div>
        <div className="text">
          ReactJs와 nextJs를 이용한 페이지입니다. next진짜 최고네요.
        </div>
        <div className="text">
          react쓰시는분들은 무조건 next 쓰는걸 추천합니다.
        </div>
        <div className="text">아래 사진은 제 프로필과 관련 없습니다.</div>
        <div className="img-wrapper">
          <ReflectImage image={IMAGE_SOURCE} isNight={isNight}></ReflectImage>
          <ReflectImage image={loveMonday1} isNight={isNight}></ReflectImage>
          <ReflectImage image={loveMonday2} isNight={isNight}></ReflectImage>
        </div>
      </div>
    </Container>
  )
}
