import './App.css';
import Header from './components/header';
import HeroSection from './components/main/hero-section';
import OurServices from './components/main/our-services';
import WhyUs from './components/main/why-us';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <OurServices />
      <WhyUs />
    </div>
  );
}

export default App;
