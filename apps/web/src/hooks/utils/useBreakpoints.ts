import useMediaQuery from '../utils/useMediaQuery';

const useBreakpoints = () => {
  // THIS MOBILE INCLUDES MOBILE + TABLETS
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isDesktop = useMediaQuery('(min-width: 768px)');
  return { isMobile, isDesktop };
};

export default useBreakpoints;
