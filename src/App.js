import React, { useState, useEffect } from 'react';
import './App.css';
import Cover from './components/cover/Cover';
import Navbar from './components/navbar/Navbar';
import Pilars from './components/pilars/Pilars'
import Footer from './components/footer/Footer';

function App() {
  const [scrollHeight, setScrollHeigth] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeigth(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [scrollHeight])
  return (
    <div className='App'>
      <Navbar isScrolling = {scrollHeight}/>
      <Cover />
      <Pilars />
      <Footer />
    </div>
  );
}

export default App;
