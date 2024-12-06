import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Ensure these are imported
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

// Pages
import Home from "./pages/Home";
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <BrowserRouter> 
      <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" 
            element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
