import * as Styles from './styles'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import InputMask from 'react-input-mask'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { Button } from '@mui/material'

import { useRouter } from 'next/router'
export default function PatientEdit({ params }) {
  const [patient, setPatient] = useState({})
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [birthday, setBirthday] = useState('')
  const [contact, setContact] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')

  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Header />
      <Styles.Form>
        <Divider>
          <b> Dados pessoais </b>
        </Divider>
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

          <TextField
            id="birthday"
            label="Data de nascimento"
            value={birthday}
            variant="outlined"
            style={{ margin: '20px' }}
            onChange={(e) => setBirthday(e.target.value)}
          />

          <TextField
            id="contact"
            label="Contato"
            value={contact}
            variant="outlined"
            style={{ margin: '20px' }}
            onChange={(e) => setContact(e.target.value)}
          />
        </Styles.Row>
        <Divider>Endereço</Divider>
        <Styles.Row>
          <TextField
            id="zipCode"
            label="Cep"
            value={zipCode}
            variant="outlined"
            style={{ margin: '20px' }}
            onChange={(e) => setZipCode(e.target.value)}
          />
          <TextField
            id="street"
            label="Rua"
            value={street}
            variant="outlined"
            style={{ margin: '20px' }}
            onChange={(e) => setStreet(e.target.value)}
          />
          <TextField
            id="number"
            label="Número"
            value={number}
            variant="outlined"
            style={{ margin: '20px' }}
            onChange={(e) => setNumber(e.target.value)}
          />
        </Styles.Row>
        <Styles.Row>
          <TextField
            id="neighborhood"
            label="Bairro"
            value={neighborhood}
            variant="outlined"
            style={{ margin: '20px' }}
            onChange={(e) => setNeighborhood(e.target.value)}
          />

          <TextField
            id="city"
            label="Cidade"
            value={city}
            variant="outlined"
            style={{ margin: '20px' }}
            onChange={(e) => setCity(e.target.value)}
          />

          <TextField
            id="state"
            label="Estado"
            value={state}
            variant="outlined"
            style={{ margin: '20px' }}
            onChange={(e) => setState(e.target.value)}
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
          onClick={() => router.push('/patient')}
        >
          Cancelar
        </Button>
      </Styles.Row>
    </>
  )
}
