import { useEffect, useState } from 'react';

// Full-screen slogan over a background slideshow that crossfades.
export default function Hero({ slogan, images, slideInterval }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((i) => (i + 1) % images.length), slideInterval);
    return () => clearInterval(timer);
  }, [images.length, slideInterval]);

  return (
    <section id="home" className="hero">
      {images.map((src, i) => (
        <div key={src} className={`hero__slide ${i === current ? 'hero__slide--active' : ''}`} style={{ backgroundImage: `url(${src})` }} />
      ))}
      <div className="hero__overlay" />
      <h1 className="hero__slogan">{slogan}</h1>
    </section>
  );
}
