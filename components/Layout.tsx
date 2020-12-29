import React, { ReactNode, useState } from 'react'
import Header from './common/Header'
import Head from 'next/head'
import styled from 'styled-components'

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
  flex-direction: column;
  align-items: center;

  transition: background-color 200ms ease;
  background-color: ${(props) =>
    props.isNight ? NIGHT_BACKGROUND_COLOR : DAY_BACKGROUND_COLOR};

  .header {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 16px 32px;
    min-height: 62px;
  }

  .body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: calc(100vh - 62px);
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

type Props = {
  children?: ReactNode
  title?: string
}
const Layout: React.FC = ({ children, title = 'ChrisPage' }: Props) => {
  const [isNight, setIsNight] = useState(true)
  const toggleDayNight = () => {
    setIsNight(!isNight)
  }

  return (
    <Container isNight={isNight}>
      <div className="layout">
        <Head>
          <title>ChrisRhee</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="header">
          <Header isNight={isNight} toggleDayNight={toggleDayNight} />
        </div>
        <div className="body">{children}</div>
      </div>
    </Container>
  )
}

export default Layout
