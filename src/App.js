
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Calender from './components/Calender';
import EventDetails from './components/EventDetails';
import NoPage from './components/NoPage';

function App() {
    return(
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Calender />} />
          <Route path="/event" element={<EventDetails />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
