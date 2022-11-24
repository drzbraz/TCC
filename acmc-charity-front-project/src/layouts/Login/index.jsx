import TextField from '@mui/material/TextField'
import Image from 'next/image'
import { useState } from 'react'
import { onAuthenticate, api } from '../../infra/api'
import { useCookies } from 'react-cookie'
import Doctor from './../../../public/assets/doctor.svg'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

// import LoginImg from './../../../public/assets/login.svg'
import * as Styles from './styles'
export default function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useCookies(['token'])
  const router = useRouter()

  async function makeLogin() {
    const myToken = await onAuthenticate(email, password)
    setToken('token', myToken)
    if (!!myToken) {
      router.push('/home')
      return
    }
    toast.error('Ops algo deu errado 😅', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored'
    })
  }
  return (
    <>
      <Styles.Container>
        <Styles.LeftSide>
          <Styles.Content>
            <h2 style={{ textAlign: 'center' }}>Entre com a sua conta</h2>
            <p style={{ textAlign: 'center', marginBottom: '62px' }}>
              Não tem uma ainda?{' '}
              <a
                className="lnk-toggler"
                href="mailto:drz.braz@gmail.com?CC=novo acesso"
                style={{ color: '#4f77ff' }}
                rel="noreferrer"
              >
                Entre aqui.
              </a>
            </p>
            <Styles.Input>
              <TextField
                id="standard-basic"
                label="Email"
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
              <Image src={Doctor} alt={'Doctor image'} width={500} height={500} />
            </Styles.Image>
            <Styles.Title>Bem-vindo a ACMC</Styles.Title>
          </Styles.Logo>
        </Styles.RightSide>
      </Styles.Container>
    </>
  )
}
