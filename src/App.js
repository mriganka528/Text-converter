import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('primary');
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('primary');
      document.body.style.backgroundColor = '#f0f8ff'
      showAlert(" Light mode has been enabled", "success");

    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#020912';
      showAlert(" Dark mode has been enabled", "success");

    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);

    }, 1700);
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container" >
          <Routes>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter your text here" mode={mode} />} />
            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>

      </BrowserRouter>
    </>
  );
}

export default App;
