import * as Styles from './styles'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import InputMask from 'react-input-mask'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { Button } from '@mui/material'
import { getDoctor, updateDoctor } from '../../infra/api.js'
import { toast } from 'react-toastify'

import { useRouter } from 'next/router'
export default function DoctorNew({ params }) {
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [birthday, setBirthday] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const router = useRouter()
  const { id } = router.query

  async function update() {
    const statusCode = await updateDoctor({
      userId: id,
      name,
      cpf,
      birthday,
      phone,
      email
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
      router.push('/doctor')
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
    const patient = await getDoctor(patientId)

    setName(patient?.name)
    setCpf(patient?.cpf)
    setBirthday(patient?.birthday)
    setPhone(patient?.phone)
    setEmail(patient?.email)
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
            value={phone}
            placeholder="Contato"
            style={{ margin: '20px' }}
            onChange={(e) => setPhone(e.target.value)}
            id="phone"
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
        <Button variant="contained" style={{ marginRight: '24px' }} color="secondary" onClick={() => update()}>
          Salvar
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
