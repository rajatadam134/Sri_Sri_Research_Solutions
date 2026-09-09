import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { Services } from './components/Services';
import { TrainingsCourses } from './components/TrainingsCourses';
import { FeasibilityForm } from './components/FeasibilityForm';
import { Footer } from './components/Footer';
import { SmoothScroll } from './components/SmoothScroll';
import { RouterProvider, useRouter } from './context/RouterContext';
import { FounderPage } from './pages/FounderPage';
import { SEO } from './components/SEO';

const AppContent: React.FC = () => {
  const { currentPath } = useRouter();

  return (
    <div className="min-h-screen bg-warmwhite text-aubergine-950 font-sans selection:bg-honey/30 selection:text-aubergine-900 flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow">
        {currentPath === '/founder' ? (
          <FounderPage />
        ) : (
          <>
            <SEO 
              title="Sri Sri Research Solutions | Clinical Trials & Site Management Organization"
              description="SMO Sri Sri Research Solutions delivers turnkey clinical trial site management, regulatory liaison, and GCP-certified coordinator infrastructure across India."
              canonicalPath="/"
              ogImage="/landing-bg.png"
            />
            <Hero />
            <AboutSection />
            <Services />
            <TrainingsCourses />
            <FeasibilityForm />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <RouterProvider>
      <SmoothScroll>
        <AppContent />
      </SmoothScroll>
    </RouterProvider>
  );
};

export default App;
