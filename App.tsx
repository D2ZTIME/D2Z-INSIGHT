
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import Gallery from './components/Gallery/Gallery';
import VideoSection from './components/VideoSection/VideoSection';
import ContactForm from './components/ContactForm/ContactForm';
import Ads from './components/Ads/Ads';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Products />
      <Gallery />
      <VideoSection />
      <Ads />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
