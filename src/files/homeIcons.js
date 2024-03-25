import communityIcon from '../assets/homeIcons/communityIcon.png';
import incidentsIcon from '../assets/homeIcons/incidentsIcon.png';
import suppliersIcon from '../assets/homeIcons/suppliersIcon.png';
import transcriptionIcon from '../assets/homeIcons/transcriptionIcon.png';
import documentsIcon from '../assets/homeIcons/documentsIcon.png';
import profileIcon from '../assets/homeIcons/profileIcon.png';

const homeIcons = [
  {
    name: 'Comunidad',
    image: communityIcon,
    route: '/comunidades',
    admin: false,
  },
  {
    name: 'Incidencias',
    image: incidentsIcon,
    route: '/incidencias',
    admin: false,
  },
  {
    name: 'Proveedores',
    image: suppliersIcon,
    route: '/proveedores',
    admin: true,
  },
  {
    name: 'Transcripción',
    image: transcriptionIcon,
    route: '/',
    admin: true,
  },
  {
    name: 'Documentos',
    image: documentsIcon,
    route: '/',
    admin: true,
  },
  {
    name: 'Perfil',
    image: profileIcon,
    route: '/perfil',
    admin: false,
  }
];

export default homeIcons;