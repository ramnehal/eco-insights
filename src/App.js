import React from 'react';

import { Header, ClimateChange, Help_Donate, Footer } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <ClimateChange />
    <Help_Donate/>
    <Footer />
  </div>
);

export default App;
