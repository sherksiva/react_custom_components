import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import HomePage from './pages/HomePage.jsx';
import ButtonPage from './pages/ButtonPage.jsx';
import ListPage from './pages/ListPage.jsx';
import ModalPage from './pages/ModalPage.jsx';

function App() {
  const location = useLocation();

  return (
    <div>
      <Navigation />
      <div className="page-transition-wrapper">
        <div key={location.pathname} className="page-transition">
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/button" element={<ButtonPage />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/modal" element={<ModalPage />} />
          </Routes>
        </div>
      </div>
      <footer className="app-footer">
        <p>
          Built with React. View source on{' '}
          <a href="https://github.com/sherksiva/react_custom_components" target="_blank" rel="noreferrer">
            GitHub
          </a>
          .
        </p>
      </footer>
    </div>
  );
}

export default App;
