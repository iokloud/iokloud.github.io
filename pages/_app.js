import '../styles/globals.css'
import Layout from '../components/Layout'

function ioCloud({ Component, pageProps }) {
  return(
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default ioCloud