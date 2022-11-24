import * as Styles from './styles'
import Header from '../../components/Header'
import AppointmentForm from '../../components/AppointmentForm'
import { useRef, useState } from 'react'
import TextField from '@mui/material/TextField'
import InputMask from 'react-input-mask'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { Button } from '@mui/material'
import PrintIcon from '@mui/icons-material/Print'
import { useRouter } from 'next/router'
import ReactToPrint from 'react-to-print'
import { createAppointment } from '../../infra/api.js'
import { toast } from 'react-toastify'

export default function AppointmentNew({ params }) {
  const [patientId, setPatientId] = useState(0)
  const [patientCpf, setPatientCpf] = useState('')
  const [patientBirthday, setPatientBirthday] = useState('')
  const [doctorId, setDoctorId] = useState(0)
  const [doctorCpf, setDoctorCpf] = useState('')
  const [doctorBirthday, setDoctorBirthday] = useState('')
  const [appointment, setAppointment] = useState('')
  const [diagnosis, setDiagnosis] = useState('')
  const router = useRouter()
  const { id } = router.query

  const componentRef = useRef()

  async function create() {
    const statusCode = await createAppointment({
      patient_id: patientId,
      doctor_id: doctorId,
      date: appointment,
      diagnoses: diagnosis
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
      router.push('/appointment')
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
      <Header />
      <AppointmentForm
        ref={componentRef}
        setPatientId={setPatientId}
        setDoctorId={setDoctorId}
        setPatientCpf={setPatientCpf}
        patientCpf={patientCpf}
        setPatientBirthday={setPatientBirthday}
        patientBirthday={patientBirthday}
        setDoctorCpf={setDoctorCpf}
        doctorCpf={doctorCpf}
        doctorBirthday={doctorBirthday}
        appointment={appointment}
        setAppointment={setAppointment}
        diagnosis={diagnosis}
        setDiagnosis={setDiagnosis}
        setDoctorBirthday={setDoctorBirthday}
      />
      <div>
        <ReactToPrint
          trigger={() => (
            <div style={{ width: '1250px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <Button>
                <PrintIcon />
              </Button>
            </div>
          )}
          content={() => componentRef.current}
        />
      </div>
      <Styles.Row>
        <Button variant="contained" style={{ marginRight: '24px' }} color="secondary" onClick={create}>
          Confirmar
        </Button>
        <Button
          variant="contained"
          style={{ marginLeft: '24px' }}
          color="inherit"
          onClick={() => router.push('/appointment')}
        >
          Cancelar
        </Button>
      </Styles.Row>
    </>
  )
}
