import { ChakraProvider } from '@chakra-ui/react'
import Layout from "../components/Layout"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
  <Layout>
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
  </Layout>
  </div>
  )
}

export default MyApp
