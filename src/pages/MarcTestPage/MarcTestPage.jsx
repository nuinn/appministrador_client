import styled from 'styled-components'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 85vh;
`

function MarcTestPage() {
  return (
    <>
      <Header />
        <StyledContainer>
          <input type="file"></input>
          <input type="file" accept="video/*;capture=camcorder"></input>
          <input type="file" accept="audio/*;capture=microphone"></input>
        </StyledContainer>
      <Footer />
    </>
  )
}

export default MarcTestPage