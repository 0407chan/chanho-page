import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  position: relative;
  width: 400px;
  height: 400px;
  margin: 20px;
  overflow: hidden;
  transition: 200ms ease;
  border-radius: 15px;
  justify-content: center;
  align-items: center;

  .image {
    display: flex;
    img {
      object-fit: cover;
      border-radius: 15px;
      width: 400px;
      height: 400px;
      transition: 200ms ease;
    }
  }
  .port-info {
    display: flex;
    bottom: -40%;
    width: 100%;
    height: 40%;

    flex-direction: column;
    position: absolute;
    justify-content: center;
    /* visibility: hidden; */
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 10;
    backdrop-filter: blur(15px);
    box-shadow: 0 -10px 10px rgba(0, 0, 0, 0.1);
    border: 0.5px solid rgba(255, 255, 255, 0.1);
    transition: bottom 400ms, transform 200ms ease, opacity 200ms ease;
    /* transform: scaleY(50%); */

    .title {
      display: flex;
      justify-content: center;
      color: white;
      font-weight: 600;
      font-size: 24px;
      margin: 10px 0px;
    }
    .description {
      display: flex;
      justify-content: center;
      color: white;
    }
    .updatedAt {
      display: flex;
      justify-content: center;
      color: white;
      margin: 10px 0px;
    }
  }

  &:hover {
    /* transform: scale(1.03); */
    box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.2);

    .port-info {
      bottom: 0px;
      /* visibility: visible; */
      /* transform: scaleY(0px); */
    }
  }
`
type Props = {
  image: string
  title: string
  updatedAt: string
  description?: string
}
const Work: React.FC<Props> = ({ image, title, updatedAt, description }) => {
  return (
    <Container>
      <div className="image">
        <img alt={title} src={image}></img>
      </div>
      <div className="port-info">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <div className="updatedAt">{updatedAt}</div>
      </div>
    </Container>
  )
}
export default Work
