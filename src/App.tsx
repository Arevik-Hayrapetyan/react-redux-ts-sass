import { Cards } from './features/cards/Cards'
import './App.scss'
import Sidebar from './features/sidebar/Sidebar'
import Navbar from './features/navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className='wrapper'>
        <Navbar />
        <Cards />
      </div>
    </div>
  )
}

export default App
