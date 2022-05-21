import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomeScreen } from './Screns/HomeScreen';
import { CreateScreen } from './Screns/CreateScreen';

import { Header } from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path='/' element={<HomeScreen />} />
      <Route path='/create' element={<CreateScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
