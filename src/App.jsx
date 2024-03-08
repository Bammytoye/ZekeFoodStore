import './App.css'
import About from './Component/About/About'
import Account from './Component/Create Account/Account'
import Delicious from './Component/Delicious/Delicious'
import Download from './Component/Download/Download'
import Footer from './Component/Footer/Footer'
import Navbar from './Component/Navbar/Navbar'
import Payment from './Component/Payment/Payment'
import Start from './Component/Started/Start'

function App() {

  return (
    <>
    <div className='bg-gray-100'>
      <Navbar />
      <About />
      <Start />
      <Account />
      <Delicious />  
      <Payment />
      <Download /> 
      <Footer />
    </div>
    </>
  )
}

export default App
