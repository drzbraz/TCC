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
import { useTheme } from '@mui/material/styles'

import { useRouter } from 'next/router'
import Signature from '../../components/Signature'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import OutlinedInput from '@mui/material/OutlinedInput'
import Autocomplete from '@mui/material/Autocomplete'
import { searchDoctorRequest, searchPatientRequest } from '../../infra/api.js'

import React from 'react'
import { GamesTwoTone } from '@mui/icons-material'
// eslint-disable-next-line react/display-name
const AppointmentForm = React.forwardRef((props, ref) => {
  const [patientName, setPatientName] = useState('')
  // const [patientCpf, setPatientCpfs] = useState('')
  // const [patientBirthday, setPatientBirthday] = useState('')
  // const [doctorName, setDoctorName] = useState('')
  // const [doctorCpf, setDoctorCpf] = useState('')
  // const [doctorBirthday, setDoctorBirthday] = useState('')
  // const [appointment, setAppointment] = useState('')
  // const [diagnosis, setDiagnosis] = useState('')
  const [patientList, setPatientList] = useState([])
  const [doctorList, setDoctorList] = useState([])
  const [selectedPatient, setSelectedPatient] = useState({})
  const [selectedDoctor, setSelectedDoctor] = useState({})
  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder'
  ]

  async function searchPatient(name) {
    const patient = await searchPatientRequest(name)
    setPatientList(patient)
  }

  async function searchDoctor(name) {
    const patient = await searchDoctorRequest(name)
    setDoctorList(patient)
  }

  function syncDataPatient(value) {
    if (!value) {
      props.setPatientCpf('')
      props.setPatientBirthday('')
      return
    }
    const patientData = patientList.find((name) => name.name == value)

    props.setPatientCpf(patientData?.cpf)
    props.setPatientId(patientData?.id)
    props.setPatientBirthday(patientData?.birthday)
  }

  function syncDataDoctor(value) {
    if (!value) {
      props.setDoctorCpf('')
      props.setDoctorBirthday('')
      return
    }
    const doctorData = doctorList.find((name) => name.name == value)

    props.setDoctorCpf(doctorData?.cpf)
    props.setDoctorId(doctorData?.id)
    props.setDoctorBirthday(doctorData?.birthday)
  }

  return (
    <Styles.Form ref={ref}>
      <b> Dados paciente</b>
      <Styles.Row>
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          options={patientList?.map((option) => option.name)}
          onChange={(event, value) => setSelectedPatient(value)}
          onBlur={() => syncDataPatient(selectedPatient)}
          style={{ width: '200px' }}
          renderInput={(params) => (
            <TextField {...params} onChange={(e) => searchPatient(e.target.value)} label="Nome" />
          )}
        />
        <InputMask
          mask="999.999.999-99"
          value={props.patientCpf}
          placeholder="CPF"
          onChange={(e) => props.setPatientCpf(e.target.value)}
          id="patientCpf"
          readOnly
        >
          {() => <TextField style={{ margin: '12px 40px' }} label="CPF" />}
        </InputMask>

        <InputMask
          mask="99/99/9999"
          value={props.patientBirthday}
          placeholder="Data de nascimento"
          onChange={(e) => props.setPatientBirthday(e.target.value)}
          id="patientBirthday"
          readOnly
        >
          {() => <TextField label="Data de nascimento" />}
        </InputMask>
      </Styles.Row>
      <b> Dados médico </b>
      <Styles.Row>
        {/* <TextField
          id="doctorName"
          label="Nome"
          value={doctorName}
          variant="outlined"
          onChange={(e) => setDoctorName(e.target.value)}
        /> */}
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          options={doctorList?.map((option) => option.name)}
          onChange={(event, value) => setSelectedDoctor(value)}
          onBlur={() => syncDataDoctor(selectedDoctor)}
          style={{ width: '200px' }}
          renderInput={(params) => (
            <TextField {...params} onChange={(e) => searchDoctor(e.target.value)} label="Nome" />
          )}
        />
        <InputMask
          mask="999.999.999-99"
          value={props.doctorCpf}
          placeholder="CPF"
          onChange={(e) => props.setDoctorCpf(e.target.value)}
          id="patientCpf"
          readOnly
        >
          {() => <TextField style={{ margin: '0px 40px' }} label="CPF" />}
        </InputMask>

        <InputMask
          mask="99/99/9999"
          value={props.doctorBirthday}
          placeholder="Data de nascimento"
          onChange={(e) => props.setDoctorBirthday(e.target.value)}
          id="doctorBirthday"
          readOnly
        >
          {() => <TextField label="Data de nascimento" />}
        </InputMask>
      </Styles.Row>
      <Styles.Row style={{ justifyContent: 'flex-start', width: '732px' }}>
        <InputMask
          mask="99/99/9999"
          value={props.appointment}
          placeholder="Data da consulta"
          onChange={(e) => props.setAppointment(e.target.value)}
          id="appointment"
        >
          {() => <TextField label="Data da consulta" />}
        </InputMask>
      </Styles.Row>
      <Styles.Row>
        <TextField
          id="diagnosis"
          label="Diagnóstico"
          value={props.diagnosis}
          minRows={7}
          multiline
          variant="outlined"
          style={{ width: '700px' }}
          onChange={(e) => props.setDiagnosis(e.target.value)}
        />
      </Styles.Row>
      <Signature />
    </Styles.Form>
  )
})

export default AppointmentForm
