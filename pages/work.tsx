import { useRouter } from 'next/router'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  color: red;

  .router {
    margin: 0px 10px;
  }
`
const Portfolio: React.FC = () => {
  return (
    <Container>
      <div>포트폴리오당 </div>
    </Container>
  )
}

export default Portfolio
