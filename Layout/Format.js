import Head from 'next/head'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

const Format = ({children}) => {
  return (
    <>
    <Head>
        <title>Quick Mobile</title>
    </Head>
    <Header />
    <main>{children}</main>
    <Footer />
    </>
  )
}

export default Format