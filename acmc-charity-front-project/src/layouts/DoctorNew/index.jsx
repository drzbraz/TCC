import * as Styles from './styles'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import InputMask from 'react-input-mask'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { Button } from '@mui/material'

import { useRouter } from 'next/router'
export default function DoctorNew({ params }) {
  const [patient, setPatient] = useState({})
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [birthday, setBirthday] = useState('')
  const [contact, setContact] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [email, setEmail] = useState('')

  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Header />
      <Styles.Form>
        <b> Novo médico </b>
        <Styles.Row>
          <TextField
            id="name"
            label="Nome"
            value={name}
            variant="outlined"
            style={{ margin: '20px' }}
            onChange={(e) => setName(e.target.value)}
          />
          <InputMask
            mask="999.999.999-99"
            value={cpf}
            placeholder="CPF"
            style={{ margin: '20px' }}
            onChange={(e) => setCpf(e.target.value)}
            id="cpf"
          >
            {() => <TextField label="CPF" />}
          </InputMask>

          <InputMask
            mask="99/99/9999"
            value={birthday}
            placeholder="Data de nascimento"
            style={{ margin: '20px' }}
            onChange={(e) => setBirthday(e.target.value)}
            id="birthday"
          >
            {() => <TextField style={{ margin: '20px' }} label="Data de nascimento" />}
          </InputMask>
        </Styles.Row>
        <b>Contato</b>
        <Styles.Row>
          <InputMask
            mask="(99) 99999-9999"
            value={contact}
            placeholder="Contato"
            style={{ margin: '20px' }}
            onChange={(e) => setContact(e.target.value)}
            id="contact"
          >
            {() => <TextField style={{ margin: '20px' }} label="Contato" />}
          </InputMask>
          <TextField
            id="email"
            label="Email"
            value={email}
            variant="outlined"
            style={{ margin: '20px' }}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Styles.Row>
      </Styles.Form>
      <Styles.Row>
        <Button
          variant="contained"
          style={{ marginRight: '24px' }}
          color="secondary"
          onClick={() => router.push(`patient/edit/${row.id}`)}
        >
          Confirmar
        </Button>
        <Button
          variant="contained"
          style={{ marginLeft: '24px' }}
          color="inherit"
          onClick={() => router.push('/doctor')}
        >
          Cancelar
        </Button>
      </Styles.Row>
    </>
  )
}
