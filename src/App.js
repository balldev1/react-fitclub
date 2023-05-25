import './App.css';
import Testimonials from './assets/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Planscard from './components/Planscard/Planscard';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';

function App() {


  return (
    <div className="App">
          <Hero/>
          <Programs/>
          <Reasons/>
          <Planscard/>
          <Testimonials/>
          <Join/>
          <Footer/>

    </div>
  );
}

export default App;
