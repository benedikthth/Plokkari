import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../../node_modules/leaflet-draw/dist/leaflet.draw.css'
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
