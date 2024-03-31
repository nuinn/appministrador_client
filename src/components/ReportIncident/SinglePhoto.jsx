import React from 'react';
import styled from 'styled-components';
import placeholderImage from '../../assets/images/image_placeholder2.png'; 

const DeleteButton = styled.button`
  display: block; // This makes the button a block element
  width: 140px;
  padding: 10px; // Padding for better appearance
  margin-bottom: 10px;
  margin-left: 20px;
  font-size: 14px;
  background-color: #024b59;
  color: white; // White text
  border: none; // No border
  border-radius: 5px; // Rounded corners for better appearance
`;

const SinglePhoto = ({ photo, handleFileChange, handleDelete }) => {
    return (
        <div>
            <label>
                <input
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
                {photo ? (
                    <img src={URL.createObjectURL(photo)} width="180" height="180" alt="Preview" style={{ objectFit: 'contain' }} />
                ) : (
                    <img src={placeholderImage} width="180" height="180" alt="Placeholder" style={{ objectFit: 'contain' }} />
                )}
            </label>
            {photo && <DeleteButton onClick={handleDelete}>Borrar</DeleteButton>}
        </div>
    );
};

export default SinglePhoto;
