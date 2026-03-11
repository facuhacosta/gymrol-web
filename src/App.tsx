import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Header, Footer } from './shared/components';
import { Hero, Gallery } from './features/showcase';
import { HowToPlay } from './features/game-guide';
import { Classes, Features, Pricing } from './features/game-content';
import { CTA, SidePanel, StickyBanner } from './features/marketing';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>HeroHabit - Fitness RPG</title>
        <meta name="description" content="Deja de entrenar. Empieza a subir de nivel. Transforma tu esfuerzo en el gimnasio en el crecimiento de tu héroe interior con HeroHabit." />
        <meta name="keywords" content="herohabit, fitness rpg, gamification, workout game, gym game, rpg workout, fitness app" />
        
        {/* Open Graph */}
        <meta property="og:title" content="HeroHabit - Fitness RPG" />
        <meta property="og:description" content="Convierte cada entrenamiento en progreso para tu personaje. ¡Únete a la aventura fitness definitiva!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gymrol-web.pages.dev/" />
        <meta property="og:image" content="logo.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HeroHabit - Fitness RPG" />
        <meta name="twitter:description" content="Tu sudor es tu experiencia. ¡Juega ahora!" />
        
        {/* AMP Link (Optional placeholder as requested) */}
        <link rel="amphtml" href="https://gymrol-web.pages.dev//amp" />
      </Helmet>

      <div className="bg-black min-h-screen text-white font-sans selection:bg-primary selection:text-black">
        <Header />
        
        <main>
          <Hero />
          <HowToPlay />
          <Classes />
          <Features />
          <Gallery />
          <Pricing />
          {/* <Requirements /> */}
          <CTA />
        </main>

        <Footer />
        
        {/* Floating Elements */}
        <StickyBanner />
        <SidePanel />
      </div>
    </HelmetProvider>
  );
}

export default App;
