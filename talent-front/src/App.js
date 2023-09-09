import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import VideoUpload from './pages/VideoUpload/VideoUpload';

function App() {
  return (
    <div className='font-display'>
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/upload' element={<VideoUpload />}></Route>

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  );
}
export default App;