// Image that never shows a broken icon: if the file is missing,
// it hides itself and the gold gradient behind it shows instead.
export default function Img({ src, alt = '', className = '' }) {
  return (
    <div className={`img-box ${className}`}>
      <img src={src} alt={alt} loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
    </div>
  );
}
