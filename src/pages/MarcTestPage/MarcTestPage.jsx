import styled from 'styled-components'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  width: 100vw;
  height: 85vh;
  padding: 30px;
`

function MarcTestPage() {
  return (
    <>
      <Header />
        <StyledContainer>
          <label>Just file<input type="file"></input></label>
          <label>Image<input type="file" accept="image/*;capture=camera"></input></label>
          <label>Video<input type="file" accept="video/*;capture=camcorder"></input></label>
          <label>Microphone<input type="file" accept="audio/*;capture=microphone"></input></label>
        </StyledContainer>
      <Footer />
    </>
  )
}

export default MarcTestPage