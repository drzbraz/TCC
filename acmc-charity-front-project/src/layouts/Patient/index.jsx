import * as Styles from './styles'
import Header from './../../components/Header'
import { Table } from '@mui/material'
import { Button } from '@mui/material'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useRouter } from 'next/router'

export default function Patient() {
  console.log('list')
  const router = useRouter()

  function createData(id, name, calories, fat, carbs, protein) {
    return { id, name, calories, fat, carbs, protein }
  }

  const rows = [
    createData(1, 'Frozen yoghurt', 159, 6.0, 24),
    createData(2, 'Ice cream sandwich', 237, 9.0, 37),
    createData(3, 'Eclair', 262, 16.0, 24),
    createData(4, 'Cupcake', 305, 3.7, 67),
    createData(5, 'Gingerbread', 356, 16.0, 49)
  ]

  return (
    <>
      <Header />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
            {rows.map((row) => (
              <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.calories}</TableCell>
                <TableCell align="center">{row.fat}</TableCell>
                <TableCell align="center">{row.carbs}</TableCell>
                <TableCell align="center">
                  <Button onClick={() => router.push(`patient/edit/${row.id}`)}>Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
