import { Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutme from './Home/Aboutme';
import Home from './Home/Home';
import Project from './Project/Project';
import Resume from './resume/Resume';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/portfolio/' element={<Home />} />

      </Routes>
    </div>
  );
}

export default App;
