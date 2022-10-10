import TextField from '@mui/material/TextField'
import Image from 'next/image'

import * as Styles from './styles'
export default function Login() {
  return (
    <>
      <Styles.Container>
        <Styles.LeftSide>
          <Styles.Content>
            <Styles.Input>
              <TextField id="standard-basic" label="Email" variant="standard" />
              <TextField id="standard-basic" label="Senha" variant="standard" style={{ marginTop: '40px' }} />
            </Styles.Input>
            <Styles.Button>Entrar</Styles.Button>
          </Styles.Content>
        </Styles.LeftSide>
        <Styles.RightSide>
          <Styles.Logo>
            <Styles.Image>
              <Image src="/../public/assets/medical.webp" width={100} height={100} />
            </Styles.Image>
            <Styles.Title>Welcoming to login</Styles.Title>
          </Styles.Logo>
        </Styles.RightSide>
      </Styles.Container>
    </>
  )
}
