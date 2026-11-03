import { useEffect, useState } from 'react';

// Small crossfading slideshow used inside a container.
// Give it an array of image paths; it loops through them automatically.
// "startDelay" staggers containers so they don't all change at once.
export default function Slideshow({ images, interval = 4000, startDelay = 0, className = '' }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let timer;
    const starter = setTimeout(() => {
      timer = setInterval(() => setCurrent((i) => (i + 1) % images.length), interval);
    }, startDelay);
    return () => { clearTimeout(starter); clearInterval(timer); };
  }, [images.length, interval, startDelay]);

  return (
    <div className={`slideshow ${className}`}>
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`slideshow__img ${i === current ? 'slideshow__img--active' : ''}`}
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
      ))}
      <div className="slideshow__dots">
        {images.map((_, i) => <span key={i} className={i === current ? 'on' : ''} />)}
      </div>
    </div>
  );
}
