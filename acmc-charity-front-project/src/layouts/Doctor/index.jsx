import * as Styles from './styles'
import Header from '../../components/Header'
import { Button } from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import { getDoctorList, deleteDoctor, searchDoctorRequest } from '../../infra/api.js'
import { toast } from 'react-toastify'

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US')
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US')
  },
  {
    id: 'action',
    label: 'Ação',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2)
  }
]

function createData(name, code, population, size) {
  const density = population / size
  return { name, code, population, size, density }
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767)
]

export default function Doctor() {
  const router = useRouter()

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [searchDoctor, setSearchDoctor] = useState('')
  const [doctorList, setDoctorList] = useState([])

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  function createData(id, name, calories, fat, carbs, protein) {
    return { id, name, calories, fat, carbs, protein }
  }

  const rows = [
    createData(1, 'Daniel Braz', '18/07/1998', '113.998.888-15', '(31) 9999-9999'),
    createData(2, 'Yuri Sales', '12/03/1999', '113.998.848-15', '(31) 9999-9999'),
    createData(3, 'Esdras Aguilar', '20/06/1990', '113.995.888-15', '(31) 9999-9999'),
    createData(4, 'Lucas Ravacini', '14/01/1988', '113.992.888-15', '(31) 9999-9999'),
    createData(5, 'Lucas Duarte', '09/02/1980', '113.998.588-15', '(31) 9999-9999')
  ]

  async function search(name) {
    console.log(name, 'test')
    const doctors = await searchDoctorRequest(name)
    console.log(doctors)
    setDoctorList(doctors)
  }

  async function getDoctor(page, rowsPerPage) {
    const doctor = await getDoctorList(0, 5)
    setDoctorList(doctor)
  }

  async function deleteDoctorInfo(doctorId) {
    const shouldDelete = confirm('Deseja excluir o médico?')
    if (shouldDelete) {
      await deleteDoctor(doctorId)
      getDoctor(page, rowsPerPage)
      toast.info('Excluído com sucesso 😁', {
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
  }
  useEffect(() => {
    getDoctor(page, rowsPerPage)
  }, [])

  return (
    <>
      <Header />
      <Styles.Container>
        <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center' }}>
          <h3>Lista de médicos</h3>
          <Button
            variant="contained"
            color="secondary"
            style={{ height: '40px' }}
            onClick={() => router.push(`doctor/new`)}
          >
            Novo cadastro
          </Button>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            textAlign: 'center',
            alignItems: 'center',
            paddingBottom: '32px'
          }}
        >
          <TextField
            id="searchDoctor"
            label="Buscar médico"
            value={searchDoctor}
            style={{ width: '400px' }}
            variant="outlined"
            onChange={(e) => setSearchDoctor(e.target.value)}
          />
          <Button
            variant="contained"
            color="secondary"
            style={{
              height: '40px',
              marginLeft: '12px'
            }}
            onClick={() => search(searchDoctor)}
          >
            <SearchIcon />
          </Button>
        </div>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>Nome</TableCell>
                  <TableCell align="center">Data de nascimento</TableCell>
                  <TableCell align="center">CPF</TableCell>
                  <TableCell align="center">Contato</TableCell>
                  <TableCell align="center">Ação</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {doctorList?.map((patient) => (
                  <TableRow key={patient.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {patient.name}
                    </TableCell>
                    <TableCell align="center">{patient.birthday}</TableCell>
                    <TableCell align="center">{patient.cpf}</TableCell>
                    <TableCell align="center">{patient.phone}</TableCell>
                    <TableCell align="center">
                      <Button onClick={() => router.push(`doctor/edit/${patient.id}`)}>
                        <EditIcon />
                      </Button>
                      <Button onClick={() => deleteDoctorInfo(patient.id)}>
                        <DeleteIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10]}
            component="div"
            count={doctorList?.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage={'Linhas por página'}
          />
        </Paper>
      </Styles.Container>
    </>
  )
}
