import Laouts from '@/components/Laouts'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <Laouts>
      <Component {...pageProps} />
    </Laouts>
  )
}
