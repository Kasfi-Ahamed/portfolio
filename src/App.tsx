import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { Research } from './pages/Research';
import { About } from './pages/About';
import { Certifications } from './pages/Certifications';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/research" element={<Research />} />
          <Route path="/about" element={<About />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
