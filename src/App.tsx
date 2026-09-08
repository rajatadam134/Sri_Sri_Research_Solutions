import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { TrainingsCourses } from './components/TrainingsCourses';
import { FeasibilityForm } from './components/FeasibilityForm';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-warmwhite text-aubergine-950 font-sans selection:bg-honey/30 selection:text-aubergine-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <TrainingsCourses />
        <FeasibilityForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
