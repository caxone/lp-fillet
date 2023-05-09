import React from 'react';
import About from './components/Sections/About';
import Footer from './components/Sections/Footer';
import Header from './components/Sections/Header';
import Link from './components/Sections/Link';
import Presentation from './components/Sections/Presentation';

const App: React.FC = () => {
  return <>
    <Header />
    <About />
    <Presentation />
    <Link />
    <Footer />
  </>;
}


export default App;
