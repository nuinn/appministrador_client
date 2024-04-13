import { useNavigate, useLocation } from 'react-router-dom'
import StyledFooterBumper from './styled/FooterBumper.js'
import StyledFooterContainer from './styled/FooterContainer.js'
import home from '../../assets/navIcons/home.png'
import incidents from '../../assets/navIcons/incidents.png'
import incidentsOn from '../../assets/navIcons/incidentsOn.png'
import communities from '../../assets/navIcons/communities.png'
import communitiesOn from '../../assets/navIcons/communitiesOn.png'
import profile from '../../assets/navIcons/profile.png'

const icons = [
  { name: 'home',
    src: home,
    route: '/',
  },
  { name: 'incidents',
    src: incidents,
    on: incidentsOn,
    route: '/incidencias'
  },
  { name: 'communities',
    src: communities,
    on: communitiesOn,
    route: '/comunidades'
  },
  { name: 'profile',
    src: profile,
    route: '/reportarincidencia'
  },
]

function Footer(props){
  const {type, clearData} = props
  const navigate = useNavigate()
  const location = useLocation()

  const handleIconClick = (route) => {
    if (location.pathname === '/comunidades' || location.pathname === '/incidencias') {
      clearData();
    }
    navigate(route);
  }

  return (
    <StyledFooterBumper>
      <StyledFooterContainer>
        {icons.map((icon) =>
          icon.name === type ?
          <div className='activeIconContainer' key={icon.name}>
            <div className='left' />
            <div className="center">
              <div className="top">
                <div className="dip">
                  <div className="imageContainer">
                    <img src={icon.on} />
                  </div>
                </div>
              </div>
              <div className="bottom" />
            </div>
            <div className='right' />
          </div>
          :
          <div className='unactiveIconContainer' key={icon.name}>
            <img onClick={() => handleIconClick(icon.route)} src={icon.src}/>
          </div>
          )}
      </StyledFooterContainer>
    </StyledFooterBumper>
  )
}

export default Footer