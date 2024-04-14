import React from 'react';
import styled from 'styled-components';
import placeholderImage from '../../assets/images/image_placeholder2.png';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & input {
    height: 180px;
    width: 180px;
    z-index: 100;
    position: absolute;
  }
`

const DeleteButton = styled.button`
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

                <input
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    // style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
                {photo ? (
                    <img className='upload' src={URL.createObjectURL(photo)} width="280" height="280" alt="Preview" style={{ objectFit: 'contain' }} />
                ) : (
                    <img className='placeholder' src={placeholderImage} width="180" height="180" alt="Placeholder" style={{ objectFit: 'contain' }} />
                )}

            {photo && <DeleteButton onClick={handleDelete}>Borrar</DeleteButton>}
        </StyledContainer>
    );
};

export default SinglePhoto;
