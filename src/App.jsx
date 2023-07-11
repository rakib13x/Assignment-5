// App.js
import React from 'react';
import './App.css';
import Header from './header/Header';
import Content from './content/Content';
import Footer from './footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header title="Simple React Application" />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
