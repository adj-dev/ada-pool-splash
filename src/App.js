import ComingSoon from './components/ComingSoon'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

function App() {
  return (
    <Container>
      <ComingSoon/>
    </Container>
  )
}

export default App
