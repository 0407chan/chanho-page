import React from 'react'
import styled from 'styled-components'
const Container = styled.div``
type Props = {
  prop?: string
}
const Study: React.FC<Props> = ({ prop }) => {
  return (
    <Container>
      <div>study</div>
    </Container>
  )
}
export default Study
