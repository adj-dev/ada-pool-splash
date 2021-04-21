import styled from 'styled-components'

const Title = styled.div`
  display: flex;
  font-size: 7rem;
  color: #fefefe;
  font-family: 'Megrim', cursive;
`

const Subtitle = styled.div`
  font-size: 1.7rem;
  margin-top: 2rem;
  color: #fefefe8a;
  font-family: 'Montserrat', sans-serif;
`

function ComingSoon() {
  return (
    <>
      <Title>adj</Title>
      <Subtitle>A CARDANO STAKE POOL</Subtitle>
    </>
  )
}

export default ComingSoon
