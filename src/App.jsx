import { useState, useEffect } from "react";
import weaponService from "./services/baseWeapons";
import Header from './components/Header';
import Card from "./components/Card";
import './App.css';

function App() {
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    weaponService
      .getAll()
      .then((data) => {
        setWeapons(data);
      });
  }, []);

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
      <main className="flex">
        {
          weapons.length > 0 && 
          weapons.map((weapon) => (
            <Card
              key={weapon.id}
              image={{
                url: weapon.image,
                alt: weapon.name
              }} 
              title={weapon.name}
              description={weapon.description}
            />
          ))
        }
      </main>
    </div>
  );
};

export default App;
