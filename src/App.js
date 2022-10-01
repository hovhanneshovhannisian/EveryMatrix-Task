import './app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from './components/MainComs/MainPage';
import Nav from './Nav';

function App() {
  return (
    // I am use react router for routing required page from navbar 
    // In this case the count of pages is one and all links have to route the same page
    <Router>
      <div className="App">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
