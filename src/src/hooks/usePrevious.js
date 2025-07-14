import { useRef, useLayoutEffect } from 'react';

function usePrevious(value) {
  const ref = useRef();

  useLayoutEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default usePrevious;
