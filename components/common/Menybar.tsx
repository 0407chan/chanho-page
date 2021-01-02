import styled from 'styled-components'
import Link from 'next/link'
import DayNightCheckBox from '../DayNightCheckBox'

const NIGHT_BACKGROUND_COLOR = 'rgb(23, 24, 41)'
const DAY_BACKGROUND_COLOR = 'rgb(244, 235, 225)'

type ContainerProps = {
  isNight: boolean
}
const Container = styled.div<ContainerProps>`
  display: flex;

  width: 100%;
  height: 100%;
  transition: background-color 200ms ease;
  background-color: ${(props) =>
    props.isNight ? NIGHT_BACKGROUND_COLOR : DAY_BACKGROUND_COLOR};

  justify-content: space-between;
  .router-wrapper {
    display: flex;

    .router {
      display: flex;
      justify-content: center;
      font-weight: 600;
      align-items: center;
      margin: 0px 10px;
      color: ${(props) => (props.isNight ? '#ffffff' : NIGHT_BACKGROUND_COLOR)};
      cursor: pointer;

      &:hover {
        color: ${(props) => (props.isNight ? '#acacac' : 'rgb(172, 163, 153)')};
      }
    }
  }
`

type Props = {
  isNight?: boolean
  toggleDayNight: () => void
}

const Menybar: React.FC<Props> = ({ isNight, toggleDayNight }: Props) => {
  return (
    <Container isNight={isNight}>
      <span className="router-wrapper">
        <Link href="/">
          <span className="router">Home</span>
        </Link>
        <Link href="/work">
          <span className="router">Work</span>
        </Link>
        <Link href="/study">
          <span className="router">Study</span>
        </Link>
      </span>
      <DayNightCheckBox
        isNight={isNight}
        toggleDayNight={toggleDayNight}
      ></DayNightCheckBox>
    </Container>
  )
}

export default Menybar
