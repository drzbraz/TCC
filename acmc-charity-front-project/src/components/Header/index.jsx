import * as Styles from './styles'
import Link from 'next/link'
import { useRouter } from 'next/router'
import InstagramIcon from '@mui/icons-material/Instagram'

export default function Header({ children }) {
  const router = useRouter()

  function isMenuActive(menu) {
    return !!router.pathname.includes(menu)
  }

  return (
    <>
      <Styles.Header>
        <Styles.SocialMedia>
          <InstagramIcon style={{ marginRight: '8px' }} />
          <a href="https://www.instagram.com/noticias_da_acmc_e_do_bairro/" target="_blank" rel="noreferrer">
            @noticias_da_acmc_e_do_bairro
          </a>
        </Styles.SocialMedia>
        <Styles.Menus>
          <Link href="/home">
            <a style={{ color: `${isMenuActive('home') ? 'rgb(0 22 98)' : 'white'}` }}>Home</a>
          </Link>
          <Link href="/patient">
            <a style={{ color: `${isMenuActive('patient') ? 'rgb(0 22 98)' : 'white'}` }}>Pacientes</a>
          </Link>
          <Link href="/doctor">
            <a style={{ color: `${isMenuActive('doctor') ? 'rgb(0 22 98)' : 'white'}` }}>Médicos</a>
          </Link>
          <Link href="/appointment">
            <a style={{ color: `${isMenuActive('appointment') ? 'rgb(0 22 98)' : 'white'}` }}>Consultas</a>
          </Link>
          <Link href="/">
            <a style={{ color: 'white' }}>Sair</a>
          </Link>
        </Styles.Menus>
      </Styles.Header>
      {children}
    </>
  )
}
