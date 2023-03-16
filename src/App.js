import './App.css';
import Header from './components/header';
import HeroSection from './components/main/hero-section';
import OurServices from './components/main/our-services';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <OurServices />
    </div>
  );
}

export default App;
