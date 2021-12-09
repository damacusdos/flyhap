import { Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import Login from './routes/login';
import Main from './routes/main';
import ResetPassword from './routes/resetPassword';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/main" element={<Main />} />
        <Route path="/reset" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
