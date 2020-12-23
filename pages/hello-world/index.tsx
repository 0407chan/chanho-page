import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { prefix } from '../index'

const IMAGE_SOURCE = `${prefix}/image/godchanho.gif`
const loveMonday1 = `${prefix}/image/love-monday.png`
const loveMonday2 = `${prefix}/image/love-monday2.png`
const NIGHT_BACKGROUND_COLOR = 'rgb(23, 24, 41)'
const DAY_BACKGROUND_COLOR = 'rgb(219, 221, 254)'

type ContainerProps = {
  isNight: boolean
}
const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100vw;
  height: 100vh;
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

    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 30px;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #808080;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    .slider:before {
      position: absolute;
      content: '';
      height: 24px;
      width: 24px;
      left: 5px;
      bottom: 3px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    input:checked + .slider {
      background-color: #2196f3;
    }

    input:focus + .slider {
      box-shadow: 0 0 1px #2196f3;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
      border-radius: 34px;
    }

    .slider.round:before {
      border-radius: 50%;
    }
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
    width: inherit;
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
    width: inherit;
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
  const [isNight, setisNight] = useState(true)
  const toggleDayNight = () => {
    setisNight(!isNight)
  }

  useEffect(() => {
    console.log('오냐안오냐', prefix)
  }, [])
  return (
    <Container isNight={isNight}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="header">
        <label className="switch">
          <input
            type="checkbox"
            checked={isNight}
            onChange={() => toggleDayNight()}
          />
          <span className="slider round"></span>
        </label>
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
