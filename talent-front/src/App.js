import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='font-display'>
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );  
}
export default App;