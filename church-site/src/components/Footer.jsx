import { FaInstagram, FaXTwitter, FaYoutube, FaFacebook, FaTiktok } from 'react-icons/fa6';

// Each platform gets its real brand colour.
const ICONS = {
  instagram: { Icon: FaInstagram, color: '#E4405F' },
  x: { Icon: FaXTwitter, color: '#ffffff' },
  youtube: { Icon: FaYoutube, color: '#FF0000' },
  facebook: { Icon: FaFacebook, color: '#1877F2' },
  tiktok: { Icon: FaTiktok, color: '#25F4EE' },
};

export default function Footer({ name, socials }) {
  return (
    <footer className="footer">
      <h3>Follow us on Social Media</h3>
      <div className="footer__icons">
        {socials.map(({ platform, url }) => {
          const { Icon, color } = ICONS[platform];
          return (
            <a key={platform} href={url} target="_blank" rel="noreferrer" aria-label={platform} style={{ color }}>
              <Icon />
            </a>
          );
        })}
      </div>
      <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
    </footer>
  );
}
