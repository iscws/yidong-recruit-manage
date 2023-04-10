import { useCallback, useEffect, useRef } from 'react';

type fnType = (...args: any) => any;

export function useThrottle(fn: fnType, delay: number, dep: any[] = []) {
  const { current } = useRef<{ fn: fnType; timer?: NodeJS.Timeout | null }>({
    fn,
    timer: null
  });
  useEffect(
    function () {
      current.fn = fn;
    },
    [fn]
  );

  return useCallback(function f(this: any, ...args: any) {
    if (!current.timer) {
      current.timer = setTimeout(() => {
        delete current.timer;
      }, delay);
      current.fn.call(this, ...args);
    }
  }, dep);
}
