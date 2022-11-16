import * as Styles from './styles'
import Header from './../../components/Header'
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
import { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'

export default function Appointment() {
  const router = useRouter()

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [searchAppointment, setSearchAppointment] = useState('')

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  function createData(id, name, fat, carbs) {
    return { id, name, fat, carbs }
  }

  const rows = [
    createData(1, 'Daniel Braz', 'Bernardo Mafra', '18/07/2022'),
    createData(2, 'Yuri Sales', 'Daniel Evangelista', '18/08/2022'),
    createData(3, 'Esdras Aguilar', 'Marcus Eugenio', '18/09/2022'),
    createData(4, 'Lucas Ravacini', 'Lucas Augusto', '18/10/2022'),
    createData(5, 'Lucas Duarte', 'Robert Veloso', '18/11/2022')
  ]
  return (
    <>
      <Header />
      <Styles.Container>
        <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center' }}>
          <h3>Lista de consultas</h3>
          <Button
            variant="contained"
            color="secondary"
            style={{ height: '40px' }}
            onClick={() => router.push(`appointment/new`)}
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
            id="searchAppointment"
            label="Buscar por paciente ou médico"
            value={searchAppointment}
            style={{ width: '400px' }}
            variant="outlined"
            onChange={(e) => setSearchAppointment(e.target.value)}
          />
          <Button
            variant="contained"
            color="secondary"
            style={{
              height: '40px',
              marginLeft: '12px'
            }}
            onClick={() => router.push(`patient/new`)}
          >
            {' '}
            <SearchIcon />
          </Button>
        </div>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>Paciente</TableCell>
                  <TableCell>Médico</TableCell>
                  <TableCell align="center">Data</TableCell>
                  <TableCell align="center">Ação</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.fat}
                    </TableCell>
                    <TableCell align="center">{row.carbs}</TableCell>
                    <TableCell align="center">
                      <Button onClick={() => router.push(`appointment/edit/${row.id}`)}>
                        <EditIcon />
                      </Button>
                      <Button onClick={() => router.push(`doctor/edit/${row.id}`)}>
                        <DeleteIcon />
                      </Button>{' '}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
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
