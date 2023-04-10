import React, { useCallback, useRef, useEffect } from 'react';
type fnType = (...args: any) => any;

export function useDebounce(fn: fnType, delay: number, dep: any[] = []) {
  // 利用useRef存入函数以及timer
  const { current } = useRef<{ fn: fnType; timer: NodeJS.Timeout | null }>({
    fn,
    timer: null
  });
  useEffect(() => {
    //每次重渲染都会让 fn !== current.fn,所以需要useEffect对fn进行重新绑定
    current.fn = fn;
  }, [fn]);

  return useCallback(function (this: any) {
    if (current.timer) {
      clearTimeout(current.timer);
    }
    current.timer = setTimeout(() => {
      current.fn.call(this);
    }, delay);
  }, []);
}
