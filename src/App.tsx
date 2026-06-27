import { Outlet } from 'react-router-dom';
import AnimatedBackground from './components/AnimatedBackground';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-navy text-slate-100">
      <AnimatedBackground />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
