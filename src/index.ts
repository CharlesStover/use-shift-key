import { useEffect, useState } from 'react';

export default function useShiftKey(): boolean {
  const [shiftKey, setShiftKey] = useState(false);

  useEffect((): (() => void) => {
    const handleChange = (e: KeyboardEvent): void => {
      setShiftKey(e.shiftKey);
    };
    window.addEventListener('keydown', handleChange);
    window.addEventListener('keyup', handleChange);
    return (): void => {
      window.removeEventListener('keydown', handleChange);
      window.removeEventListener('keyup', handleChange);
    };
  }, []);

  return shiftKey;
}
