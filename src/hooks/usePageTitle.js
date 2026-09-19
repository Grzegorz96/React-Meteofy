import { useEffect } from 'react';
import { useMatches } from 'react-router-dom';

const usePageTitle = () => {
  const matches = useMatches();

  useEffect(() => {
    const currentTitle = matches[matches.length - 1]?.handle?.title;
    document.title = currentTitle ? `Meteofy - ${currentTitle}` : 'Meteofy';
  }, [matches]);
};

export default usePageTitle;
