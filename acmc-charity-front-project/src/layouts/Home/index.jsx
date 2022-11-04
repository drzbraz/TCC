import * as Styles from './styles'
import Header from './../../components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />
      <Image
        alt="background image"
        style={{ position: 'relative' }}
        src="/../public/assets/background.png"
        width="1840"
        height="1000"
      />
      <Styles.Title>Welcoming to login</Styles.Title>
    </>
  )
}