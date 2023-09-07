import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='font-display'>
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  );
}
export default App;