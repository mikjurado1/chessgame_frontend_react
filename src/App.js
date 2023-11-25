import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Playonline from './pages/Playonline';
import Homepage from './pages/Homepage'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Homepage/>} />
          <Route path="/play" element={<Playonline />} />
          {/* Define más rutas según sea necesario */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
