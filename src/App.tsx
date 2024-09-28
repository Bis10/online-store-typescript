import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import StoreNavbar from './components/StoreNavbar';
import List from './components/List';
import StringReverse from './components/StringReverse';

function App() {
  

  return (
    <div>
      <StoreNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/string" element={<StringReverse />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
