import { AppProps } from 'next/app'
import Head from 'next/head'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'instantsearch.css/themes/satellite-min.css'
//
import { AppContextProvider } from '@/contexts/AppContext'
import '@/styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  </>
)

export default App
