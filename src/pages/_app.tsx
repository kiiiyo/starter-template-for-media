import { AppProps } from 'next/app'
import Head from 'next/head'
import '@fortawesome/fontawesome-svg-core/styles.css'
//
import { MobileGlobalNavigationProvider } from '../contexts/MobileGlobalNavigationContext'
import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
    <MobileGlobalNavigationProvider>
      <Component {...pageProps} />
    </MobileGlobalNavigationProvider>
  </>
)

export default App
