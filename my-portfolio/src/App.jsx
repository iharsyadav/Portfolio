import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Homepage';
import './App.css'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
       
      </Routes>
    </>
  )
}

export default App
