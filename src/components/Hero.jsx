import { useState, useEffect } from "react";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";

function Hero() {
  const images = [hero1, hero2, hero3, hero4];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-slider">
      <img
        src={images[current]}
        alt="Luxe Niche Threads"
        className="hero-slide"
      />

      <div className="hero-overlay">
  <h1>LUXE NICHE THREADS</h1>
        <p>Luxury Eastern Wear • Pret • Lawn • Unstitched</p>
      </div>
    </section>
  );
}

export default Hero;