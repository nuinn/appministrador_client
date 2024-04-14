import StyledEditButton from './styled/EditButton.js'
import editIcon from '../../assets/icons/edit.png'

function EditButton(props) {
  const { edit, toggleEdit } = props

  return (
    <StyledEditButton onClick={toggleEdit} className={ edit ? 'editing' : '' }>
      { edit ?
      <p>✕</p>
      :
      <img src={editIcon} alt="" />
      }
    </StyledEditButton>
  )
}

export default EditButton