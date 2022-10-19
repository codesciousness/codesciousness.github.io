import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollHandler = ({ children }) => {
  const { pathname, hash } = useLocation();

  const handleScroll = () => {
    const element = document.getElementById(hash.replace('#', ''));

    setTimeout(() => {
      window.scrollTo({
        behavior: element ? 'smooth' : 'auto',
        top: element ? element.offsetTop : 0
      });
    }, 100);
  };

  useEffect(() => {
    handleScroll();
  }, [pathname, hash]);

  return children;
};

export default ScrollHandler;