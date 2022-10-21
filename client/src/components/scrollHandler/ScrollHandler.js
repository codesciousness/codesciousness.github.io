import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useWindowSize } from '../../hooks/use-window-size';
import { calcOffsetTop } from '../../util/calc-offsetTop-navbar';

const ScrollHandler = ({ children }) => {
  const { pathname, hash } = useLocation();
  const size = useWindowSize();
  const width = size.width;

  const handleScroll = () => {
    const element = document.getElementById(hash.replace('#', ''));

    setTimeout(() => {
      window.scrollTo({
        behavior: element ? 'smooth' : 'auto',
        top: element ? element.offsetTop - calcOffsetTop(width) : 0
      });
    }, 100);
  };

  useEffect(() => {
    handleScroll();
  }, [pathname, hash]);

  return children;
};

export default ScrollHandler;