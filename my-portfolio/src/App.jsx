import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/home/home';
import Homepage from './homepage';
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
