import { Routes, Route } from 'react-router-dom';
import HomePageLayout from './HomePageLayout';
import TeamStoryPage from './TeamStoryPage';
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop
import './App.css'; // Keep if you have specific App-level styles
// import './index.css'; // Already imported in main.tsx

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<HomePageLayout />} />
      <Route path="/team-story" element={<TeamStoryPage />} />
      {/* You can add more routes here later, e.g., for individual project pages */}
      </Routes>
    </>
  );
}

export default App;