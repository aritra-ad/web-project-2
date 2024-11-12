import React from 'react';
import Navbar from './components/Navbar'; // Ensure these components exist
import Banner from './components/Banner'; 
import Timeline from './components/Timeline';
import ConcertTours from './components/ConcertTours';
import LatterCompositions from './components/LatterCompositions';
import CarousalInfo from './components/CarousalInfo';
import EventList from './components/EventList';
import ContactForm from './components/Contact';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Timeline />
      <ConcertTours />
      <LatterCompositions />
      <CarousalInfo />
      <EventList />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
