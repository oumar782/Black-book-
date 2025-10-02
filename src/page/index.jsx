import { useState } from 'react'
import Header from '../composant/Header.jsx';
import Footer from '../composant/Footer.jsx';
import Hero from '../composant/section/hero.jsx';
import Vedette from '../composant/section/ressourcevedette.jsx';
import Sous from '../composant/section/sous.jsx';

function Index() {

  return (
    <>
      <Header />
      <Hero />
      <Vedette />
      <Sous />
    </>
  )
}

export default Index