import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Signup from './components/Signup'
import Assignment2 from './components/Assignment2'
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/assignment2" element={<Assignment2 />} />
      </Routes>
    </div>
  );
}

export default App;
