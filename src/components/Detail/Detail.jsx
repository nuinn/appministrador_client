import { useState, useEffect } from 'react'
import { useLoggedUserContext } from '../../contexts/loggedUserContext.jsx'
import useApi from '../../hooks/useApi.js'
import useToggle from '../../hooks/useToggle.js'
import styled from 'styled-components'
import StyledWrap from './styled/Wrap.js'
import StyledImageCarousel from './styled/ImageCarousel.js'
import FloatingDelete from '../FloatingDelete/FloatingDelete.jsx'
import StyledContainer from './styled/Container.js'
import Stepper from '../Stepper/Stepper.jsx'
import StyledButtonContainer from './styled/ButtonContainer.js'
import StyledButton from '../styled/Button/Button.js'
import left from '../../assets/icons/left.png'
import right from '../../assets/icons/right.png'
import EditButton from '../EditButton/EditButton.jsx'
import UpdateButton from '../UpdateButton/UpdateButton.jsx'

const StyledFooterPusher = styled.div`
  padding-bottom: 200px;
`

function getFormattedNewDate(){
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are zero-based
  const year = currentDate.getFullYear();
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}h`;
  return formattedDate
}

function Detail(props){
  const { images, title, description, owner, category, date, nextStep, prevStep, params, steps, status, reload } = props
  const [imageIndex, setImageIndex] = useState(0)
  const [selectedOption, setSeletedOption] = useState(category)
  const { loggedUser } = useLoggedUserContext()
  const { getData, data, error, isLoading } = useApi()
  const [edit,toggleEdit] = useToggle(false)
  const [editedDescription, setEditedDescription] = useState(description)
  const [editedImages, setEditedImages] = useState(images)

  function onClickHandler(direction){
    setImageIndex(() => imageIndex + direction)
  }

  const incidentMapper = [
    {
      header: 'Publicado por:',
      body: `${owner.firstName} ${owner.lastName}`
    },
    {
      header: 'Categoría:',
      body: category
    },
    {
      header: 'Fecha de Incidencia:',
      body: date ? date : getFormattedNewDate()
    }
  ]

  const categoryMapper = [
    "Albañilería",
    "Electricidad",
    "Fontanería",
    "Control de Plagas",
    "Cerrajería",
    "Ascensores",
    "Mantenimiento",
    "Seguridad"
  ]

  function onChangeHandler(e) {
    setEditedDescription(e.target.value);
  }

  function handleSubmit() {
    const isNewDescription = description !== editedDescription
    const isNewCategory = category !== selectedOption
    const isNewImage = images !== editedImages
    if (isNewDescription || isNewCategory || isNewImage) {
      const body = {
        _id: params,
        description: isNewDescription ? editedDescription : undefined,
        category: isNewCategory ? selectedOption : undefined,
        image: isNewImage ? editedImages : undefined
      }
      getData({
        route: '/incidents/',
        method: 'PATCH',
        body: body
      })
    }
  }

  function handleDelete() {
    setEditedImages(editedImages.splice(imageIndex, 1))
    handleSubmit()
  }

  useEffect(() => {
    data && reload()
    error && console.log(error)
  }, [data, error])

  return (
    <>
      <StyledWrap className='row'>
        <div className='carouselContainer col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4'>
          <StyledImageCarousel $image={images[imageIndex]}>
            { imageIndex ?
            <img className='leftright' onClick={ () => onClickHandler(-1) } src={left} alt="left arrow" />
            : <span></span>
            }
            { (!!images.length && (imageIndex !== images.length-1)) &&
            <img className='leftright' onClick={ () => onClickHandler(1) } src={right} alt="right arrow" />
            }
            { loggedUser.isAdmin && <FloatingDelete handleDelete={handleDelete} />}
          </StyledImageCarousel>
        </div>
        <StyledContainer className='col-12 col-sm-10 col-md-6 col-lg-4'>
          <div className="content">
            <p className='title'>{title}</p>
            {edit ?
            <textarea
              value={editedDescription}
              onChange={ onChangeHandler }
              autoFocus
            />
            : <p className='description'>{description}</p>}
            {loggedUser.isAdmin &&
            <EditButton
              edit={edit}
              toggleEdit={toggleEdit} />}
          </div>
          { incidentMapper.map((block) =>
            <div key={block.header} className='details'>
              <p className='header'>{block.header}</p>
              {block.header === 'Categoría:' && edit ?
              <select
              value={selectedOption}
              onChange={ (e) => setSeletedOption(e.target.value) }>
                { categoryMapper.map((category) =>
                  <option
                  key={category}
                  value={category}>{category}</option>
                )}
              </select>
              : <p className='body'>{block.body}</p>}
            </div>) }
          {edit &&
            <UpdateButton handleSubmit={handleSubmit} />}
        </StyledContainer>
        { params && <Stepper steps={steps} params={params} reload={reload} className='col-12 col-sm-10 col-md-6 col-xl-4'></Stepper>}
        <StyledFooterPusher />
      </StyledWrap>
      { !params &&
      <StyledButtonContainer>
        {!params &&
        <>
          <StyledButton $bgcolor='var(--main-color)' onClick={prevStep}>Volver</StyledButton>
          <StyledButton onClick={ () => nextStep(title) }>Enviar</StyledButton>
        </>
        }
        {/* {
          loggedUser.isAdmin &&
        <>
          <StyledButton $bgcolor='var(--dark-grey-color)' onClick={prevStep}>Editar</StyledButton>
          { status === 'Pendiente' &&
          <StyledButton onClick={ () => nextStep(title) }>Aceptar</StyledButton>
          }
        </>
        } */}
      </StyledButtonContainer>
      }
    </>
  )
}

export default Detail