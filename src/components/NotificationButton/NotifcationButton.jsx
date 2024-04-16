import { useEffect } from 'react'
import useApi from '../../hooks/useApi.js'
import StyledNotificationButton from '../styled/NotificationButton/NotificationButton.js'

function NotificationButton(props) {
  const { incidentId, reload, type } = props;
  const { getData, data, error } = useApi()

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

  return (
    <StyledNotificationButton $bgcolor={type === 'unsubscribe' ? 'var(--main-color)' : '' } onClick={ onClickHandler }>
      { type === 'subscribe' ? 'Recibir notificaciones sobre esta incidencia' : 'No recibir notificaciones sobre esta incidencia'}
    </StyledNotificationButton>
  )
}

export default NotificationButton