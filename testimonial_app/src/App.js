import './App.css';
import Header from './components/header/header';
import Jumbotron from './components/jumbotron/jumbotron';
import TolusExperience from './components/experience/tolusexperience';
import JosiahExperience from './components/experience/josiahexperience';
import Testimonials from './components/testimonial/testimonial';
import VendorTestimonials from './components/testimonial/vendortestimonials';
import Footer from './components/footer/footer';
import Feature from './components/features/feature';
import Story from './components/story/story';
import { Switch, Route } from 'react-router-dom';
import SuccessCard from './components/story/success-card';

function App() {
  return (
    <div className="App">
      <Header />
      <Jumbotron />
      <TolusExperience />
      <Testimonials />
      <JosiahExperience />
      <VendorTestimonials />
      <Feature />
      <Footer />
      
        <Switch>
            <Route exact path='/Story' component={Story} />
            <Route path='/SuccessCard' component={SuccessCard} />
        </Switch>
      
    </div>
  );
}

export default App;
