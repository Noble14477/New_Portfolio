import './App.css'
import Navbar from './component/Navbar'
import Homepage from './pages/Homepage'

function App() {

  return (
    <>
      <main>
        <Navbar/>
        <div className='h-[100dvh] relative'>

       <Homepage/>
        </div>
      
      </main>
    </>
  )
}

export default App
