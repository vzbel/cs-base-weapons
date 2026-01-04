import './App.css'
import Header from './components/Header';

function App() {
  return (
    <div className="wrapper">
      <Header
        imageUrl="https://www.gamerevolution.com/wp-content/uploads/sites/2/2023/09/cs2-ranks-ranking-system-vs-csgo.jpg"
        imageAlt="FPS video game showing AK-47 being shot down an alley"
        title="CSGO Base Weapons"
        description="Explore all of CSGO’s base weaponry,
        including favorites like the 
        AK-47, M4A1-S, and more!"
        ctaText="API Website"
        ctaLink="https://bymykel.com/CSGO-API/"
      />
    </div>
  );
};

export default App;
