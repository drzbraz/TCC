import * as Styles from './styles'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import InputMask from 'react-input-mask'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { Button } from '@mui/material'
import { getPatient, updatePatient } from '../../infra/api.js'
import { toast } from 'react-toastify'

import { useRouter } from 'next/router'
export default function PatientEdit({ params }) {
  const [patient, setPatient] = useState({})
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [birthday, setBirthday] = useState('')
  const [phone, setPhone] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')

  const router = useRouter()
  const { id } = router.query

  async function update(patient) {
    const statusCode = await updatePatient({
      userId: id,
      name,
      cpf,
      birthday,
      phone,
      zipCode,
      street,
      number,
      neighborhood,
      city,
      state
    })
    if (statusCode === 200) {
      toast.success('Salvo com sucesso 😁', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
      })
      router.push('/patient')
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

  async function getPatientInfo(patientId) {
    const patient = await getPatient(patientId)

    setName(patient.name)
    setCpf(patient.cpf)
    setBirthday(patient.birthday)
    setPhone(patient.phone)
    setZipCode(patient.zipCode)
    setStreet(patient.street)
    setNumber(patient.number)
    setNeighborhood(patient.neighborhood)
    setCity(patient.city)
    setState(patient.state)
  }

  useEffect(() => {
    if (id) {
      getPatientInfo(id)
    }
  }, [id])

  return (
    <>
      <Header />
      <Styles.Form>
        <b>Editar paciente </b>
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
          <InputMask
            mask="(99) 99999-9999"
            value={phone}
            placeholder="Contato"
            style={{ margin: '20px' }}
            onChange={(e) => setPhone(e.target.value)}
            id="contact"
          >
            {() => <TextField style={{ margin: '20px' }} label="Contato" />}
          </InputMask>
        </Styles.Row>
        <b>Endereço</b>
        <Styles.Row>
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

          <InputMask
            mask="99999-999"
            value={zipCode}
            placeholder="Cep"
            style={{ margin: '20px' }}
            onChange={(e) => setZipCode(e.target.value)}
            id="zipCode"
          >
            {() => <TextField style={{ margin: '20px' }} label="Cep" />}
          </InputMask>
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
        <Button variant="contained" style={{ marginRight: '24px' }} color="secondary" onClick={() => update(patient)}>
          Salvar
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
