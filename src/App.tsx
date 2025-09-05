import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'; // เพิ่มบรรทัดนี้
import Services from './pages/Services';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{display:'flex', gap:12, padding:12, borderBottom:'1px solid #eee'}}>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}