import React, { useState } from 'react'
import styled from 'styled-components'
const Container = styled.div`
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
`
type Props = {
  isNight?: boolean
  toggleDayNight: () => void
}

const DayNightCheckBox: React.FC<Props> = ({ isNight, toggleDayNight }) => {
  return (
    <Container>
      <label className="switch">
        <input
          type="checkbox"
          checked={isNight}
          onChange={() => toggleDayNight()}
        />
        <span className="slider round"></span>
      </label>
    </Container>
  )
}
export default DayNightCheckBox
