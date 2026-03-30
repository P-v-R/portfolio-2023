import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import FescuePage from './FescuePage';

function App() {
  return (
    <BrowserRouter>
      <div className='bg-font-mono cursor-none'>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/fescue' element={<FescuePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
