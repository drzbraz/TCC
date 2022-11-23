import '../styles/globals.css'
import { CookiesProvider } from 'react-cookie'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </CookiesProvider>
  )
}

export default MyApp
