import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import * as Styles from './styles'
export default function Login() {
  return (
    <>
      <Styles.Container>
        <Styles.LeftSide>
          <Box>
            <TextField id="standard-basic" label="Login" variant="standard" />
            <TextField id="standard-basic" label="Email" variant="standard" />
          </Box>
          <Styles.Button></Styles.Button>
        </Styles.LeftSide>
        <Styles.RightSide>Welcoming to login</Styles.RightSide>
      </Styles.Container>
    </>
  )
}
