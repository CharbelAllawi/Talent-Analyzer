import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import VideoUpload from './pages/VideoUpload/VideoUpload';
import Account from './pages/Account/Account';
import Options from './pages/Select/Select';
import CandidateProfile from './pages/CandidateProfile/CandidateProfile';
import Result from './pages/Result/Result';

function App() {
  return (
    <div className='font-display'>
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/upload' element={<VideoUpload />}></Route>
          <Route path='/account' element={<Account />}></Route>
          <Route path='/select' element={<Options />}></Route>
          <Route path='/candidateprofile' element={<CandidateProfile />}></Route>
          <Route path='/result' element={<Result />}></Route>

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  );
}
export default App;