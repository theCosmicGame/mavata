import '../styles/globals.css'
import '../configureAmplify'
import Navbar from './components/navbar'

// this is our ENTRY POINT
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <div className="py-8 px-16 bg-slate-100">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
