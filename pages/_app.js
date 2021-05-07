import '../styles/globals.css'
import { Provider } from 'react-redux'
import RootStore from '../config/Store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={RootStore}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
