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
export default function AppointmentNew({ params }) {
  const [patient, setPatient] = useState({})
  const [name, setName] = useState('')
  const [isActiveSignature, setIsActiveSignature] = useState(false)
  const [cpf, setCpf] = useState('')
  const [birthday, setBirthday] = useState('')
  const [contact, setContact] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [diagnosis, setDiagnosis] = useState('')
  const [number, setNumber] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const router = useRouter()
  const { id } = router.query

  const componentRef = useRef()

  return (
    <>
      <Header />
      <AppointmentForm ref={componentRef} />
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
        <Button
          variant="contained"
          style={{ marginRight: '24px' }}
          color="secondary"
          onClick={() => router.push(`patient/edit/${row.id}`)}
        >
          Salvar
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
