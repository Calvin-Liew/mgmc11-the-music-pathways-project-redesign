import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ExplorePathwaysPage from './pages/ExplorePathwaysPage';
import ForStudentsPage from './pages/ForStudentsPage';
import ForEducatorsPage from './pages/ForEducatorsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pathways" element={<ExplorePathwaysPage />} />
        <Route path="/for-students" element={<ForStudentsPage />} />
        <Route path="/for-educators" element={<ForEducatorsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default App;

