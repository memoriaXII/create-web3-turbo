import { useEffect, useState } from 'react';

const useDebounce = <T>(initialValue: T, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(initialValue);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [initialValue, delay]);
  return debouncedValue;
};

export default useDebounce;
