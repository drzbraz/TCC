import * as Styles from './styles'
import Header from '../../components/Header'
import Home from './../../layouts/Home'
import { useRef, useState } from 'react'
import TextField from '@mui/material/TextField'
import InputMask from 'react-input-mask'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { Button } from '@mui/material'
import PrintIcon from '@mui/icons-material/Print'
import { useRouter } from 'next/router'
import Signature from '../../components/Signature'

import React from 'react'
// eslint-disable-next-line react/display-name
const AppointmentForm = React.forwardRef((props, ref) => {
  const [patientName, setPatientName] = useState('')
  const [patientCpf, setPatientCpf] = useState('')
  const [patientBirthday, setPatientBirthday] = useState('')
  const [doctorName, setDoctorName] = useState('')
  const [doctorCpf, setDoctorCpf] = useState('')
  const [doctorBirthday, setDoctorBirthday] = useState('')
  const [diagnosis, setDiagnosis] = useState('')

  const router = useRouter()
  return (
    <Styles.Form ref={ref}>
      <b> Dados paciente</b>
      <Styles.Row>
        <TextField
          id="patientName"
          label="Nome"
          value={patientName}
          variant="outlined"
          onChange={(e) => setPatientName(e.target.value)}
        />
        <InputMask
          mask="999.999.999-99"
          value={patientCpf}
          placeholder="CPF"
          onChange={(e) => setPatientCpf(e.target.value)}
          id="patientCpf"
        >
          {() => <TextField style={{ margin: '12px 40px' }} label="CPF" />}
        </InputMask>

        <InputMask
          mask="99/99/9999"
          value={patientBirthday}
          placeholder="Data de nascimento"
          onChange={(e) => setPatientBirthday(e.target.value)}
          id="patientBirthday"
        >
          {() => <TextField label="Data de nascimento" />}
        </InputMask>
      </Styles.Row>
      <b> Dados médico </b>
      <Styles.Row>
        <TextField
          id="doctorName"
          label="Nome"
          value={doctorName}
          variant="outlined"
          onChange={(e) => setDoctorName(e.target.value)}
        />
        <InputMask
          mask="999.999.999-99"
          value={doctorCpf}
          placeholder="CPF"
          onChange={(e) => setDoctorCpf(e.target.value)}
          id="patientCpf"
        >
          {() => <TextField style={{ margin: '0px 40px' }} label="CPF" />}
        </InputMask>

        <InputMask
          mask="99/99/9999"
          value={doctorBirthday}
          placeholder="Data de nascimento"
          onChange={(e) => setDoctorBirthday(e.target.value)}
          id="doctorBirthday"
        >
          {() => <TextField label="Data de nascimento" />}
        </InputMask>
      </Styles.Row>
      <Styles.Row>
        <TextField
          id="diagnosis"
          label="Diagnóstico"
          value={diagnosis}
          minRows={7}
          multiline
          variant="outlined"
          style={{ width: '700px' }}
          onChange={(e) => setDiagnosis(e.target.value)}
        />
      </Styles.Row>
    </Styles.Form>
  )
})

export default AppointmentForm
