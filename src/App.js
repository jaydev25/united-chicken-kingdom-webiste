import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import BookExperience from './container/BookExperience/BookExperience'; // Import your new component
import './App.css';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route
        path="/united-chicken-kingdom-website"
        element={
          <>
            <Header />
            <AboutUs />
            <SpecialMenu />
            <Chef />
            <Intro />
            <Laurels />
            <Gallery />
            <FindUs />
            <BookExperience />
            <Footer />
          </>
        }
      />
      {/* <Route path="/book-experience" element={<BookExperience />} /> */}
    </Routes>
  </Router>
);

export default App;
