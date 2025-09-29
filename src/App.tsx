import './index.css';
import Hero from '@/components/Hero';
import SplashCursor from '@/components/SplashCursor';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <SplashCursor />
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}

export default App