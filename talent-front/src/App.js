import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing/Landing';
import Footer from './components/Footer/Footer';
import VideoUpload from './pages/VideoUpload/VideoUpload';
import Account from './pages/Account/Account';
import Options from './pages/Select/Select';
import CandidateProfile from './pages/CandidateProfile/CandidateProfile';
import Result from './pages/Result/Result';
import MyCandidates from './pages/MyCandidates/MyCandidates';
import Loading from './pages/Loading/Loading';
import CompareCandidate from './pages/CompareCandidate/CompareCandidate';

function App() {
  return (
    <div className='font-display'>
      <BrowserRouter >


        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/upload/:id' element={<VideoUpload />}></Route>
          <Route path='/account' element={<Account />}></Route>
          <Route path='/select/:id' element={<Options />}></Route>
          <Route path='/candidateprofile' element={<CandidateProfile />} />
          <Route path='/result/:id' element={<Result />}></Route>
          <Route path='/mycandidates' element={<MyCandidates />}></Route>
          <Route path='/loading' element={<Loading />}></Route>
          <Route path='/comparecandidates' element={<CompareCandidate />}></Route>

        </Routes>


      </BrowserRouter>
    </div>

  );
}
export default App;