import './App.css';
import Header from './components/Header';
import Swap from './components/Swap';
import Tokens from './components/Tokens';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
        <Route path='/' element={<Swap/>} />
        <Route path='/tokens' element={<Tokens/>} />
        </Routes>
        
      </div>

    </div>
  )
}


export default App;
     