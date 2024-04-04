import { useNavigate } from 'react-router-dom'
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
    route: '/perfil'
  },
]

function Footer(props){
  const {type} = props
  const navigate = useNavigate()
  return (
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
          <img onClick={() => navigate(icon.route)} src={icon.src}/>
        </div>
        )}
    </StyledFooterContainer>
  )
}

export default Footer