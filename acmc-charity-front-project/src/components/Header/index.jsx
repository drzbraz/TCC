import * as Styles from './styles'
import Link from 'next/link'
export default function Header({ children }) {
  return (
    <>
      <Styles.Header>
        <Styles.SocialMedia></Styles.SocialMedia>
        <Styles.Menus>
          <Link href="/home">
            <a>Home</a>
          </Link>
          <Link href="/patient">
            <a>Paciente</a>
          </Link>
          <Link href="/doctor">
            <a>Médicos</a>
          </Link>
          <Link href="/appointment">
            <a>Consultas</a>
          </Link>
        </Styles.Menus>
      </Styles.Header>
      {children}
    </>
  )
}
