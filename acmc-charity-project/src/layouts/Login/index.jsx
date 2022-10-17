import TextField from '@mui/material/TextField'
import Image from 'next/image'
import { useState } from 'react'
import { onAuthenticate } from '../../infra/api'
import { useCookies } from 'react-cookie'

import * as Styles from './styles'
export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useCookies(['token'])

  async function makeLogin() {
    const myToken = await onAuthenticate(email, password)
    setToken('token', myToken)
  }
  return (
    <>
      <Styles.Container>
        <Styles.LeftSide>
          <Styles.Content>
            <Styles.Input>
              <TextField
                id="standard-basic"
                label="Login"
                variant="standard"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Senha"
                type={'password'}
                variant="standard"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ marginTop: '40px' }}
              />
            </Styles.Input>
            <Styles.Button onClick={makeLogin}>Entrar</Styles.Button>
          </Styles.Content>
        </Styles.LeftSide>
        <Styles.RightSide>
          <Styles.Logo>
            <Styles.Image>
              <Image src="/../public/assets/medical.webp" width={200} height={200} />
            </Styles.Image>
            <Styles.Title>Welcoming to login</Styles.Title>
          </Styles.Logo>
        </Styles.RightSide>
      </Styles.Container>
    </>
  )
}
