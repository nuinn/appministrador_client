import { useState, useEffect } from 'react'
import useApi from '../../hooks/useApi.js'
import StyledNotificationButton from '../styled/NotificationButton/NotificationButton.js'
import StyledCloseIcon from '../styled/CloseIcon/CloseIcon.js'
import downArrow from '../../assets/stepperIcons/downArrow.png'

function NotificationButton(props) {
  const { incidentId, reload, type } = props;
  const { getData, data, error } = useApi()
  const [hide,setHide] = useState(false)
  console.log(hide, 'hide')

  function onClickHandler() {
    const subscribe = type === 'subscribe'
    const petition = {
      route: '/incidents/notifyList',
      method: 'PATCH',
      body: {
        _id: incidentId,
        subscribe
      }
    }
    // console.log('petition', petition)
    getData(petition)
  }

  useEffect(() => {
    data && reload()
    error && console.log(error)
  }, [data])

  function dismiss() {
    setHide(true)
  }

  return (
    <>
    { !hide &&
      <StyledNotificationButton $bgcolor={type === 'subscribe' ? 'var(--main-color)' : '' } >
      { type === 'subscribe' ? <p onClick={ onClickHandler }>Recibir notificaciones sobre esta incidencia</p> : <p onClick={ onClickHandler }>No recibir notificaciones sobre esta incidencia</p>}
      {/* <StyledCloseIcon>✕</StyledCloseIcon> */}
      <div onClick={ dismiss }><img src={downArrow} alt="" /></div>
      </StyledNotificationButton>
    }
    </>
  )
}

export default NotificationButton