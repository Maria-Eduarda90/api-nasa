import './styles/global.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home';
import { InformationNasa } from './pages/InformationNasa';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/InformationNasa" element={<InformationNasa/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
