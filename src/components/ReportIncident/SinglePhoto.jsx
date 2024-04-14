import styled from 'styled-components';
import placeholderImage from '../../assets/images/image_placeholder2.png';
import StyledFloatingDelete from '../FloatingDelete/styled/FloatingDelete.js'
import bin from '../../assets/icons/bin.png'

const StyledContainer = styled.div`
  position: relative;

  & div {
    width: 36px;
  }
`

const DeleteButton = styled.button`
  position: absolute;
  width: 100px;
  padding: 10px; // Padding for better appearance
  margin-top: 10px;
  font-size: 14px;
  background-color: var(--secondary-color);
  color: white; // White text
  border: none; // No border
  border-radius: 5px; // Rounded corners for better appearance
  font-family: 'Inter', sans-serif;
`;

const SinglePhoto = ({ photo, handleFileChange, handleDelete }) => {
  return (
    <StyledContainer>
      <label>
        <input
            type="file"
            accept=".jpg,.jpeg,.png"
            style={{ display: 'none' }}
            onChange={handleFileChange}
        />
        {photo ?
          <img className='upload' src={URL.createObjectURL(photo)} width="280" height="280" alt="Preview" style={{ objectFit: 'contain' }} />
          :
          <img className='placeholder' src={placeholderImage} width="180" height="180" alt="Placeholder" style={{ objectFit: 'contain' }} />
        }
      </label>
      {photo &&
        <StyledFloatingDelete
         onClick={handleDelete}
         $right='15px'
         $top='195px'
        >
          <img src={bin} alt="delete" />
        </StyledFloatingDelete>
      }
    </StyledContainer>
  );
};

export default SinglePhoto;
