import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import StorySelectionPage from './pages/StorySelectionPage';
import VideoPlayerPage from './pages/VideoPlayerPage';
import StoryDetailPage from './pages/StoryDetailPage';

function App() {
  return (
    <BrowserRouter basename="/web-app-histoires">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/selection" element={<StorySelectionPage />} />
        <Route path="/story/:id" element={<StoryDetailPage />} />
        <Route path="/video/:id" element={<VideoPlayerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
