import React from 'react';
import { Header } from './components/layout/Header';
import { Carousel } from './components/home/Carousel';
import { CategoryGrid } from './components/home/CategoryGrid';
import { Footer } from './components/home/Footer';

function App() {
  return (
    <div className="min-h-screen font-body">
      <Header />
      <main>
        <Carousel />
        <CategoryGrid />
        <Footer />
      </main>
    </div>
  );
}

export default App;