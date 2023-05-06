import { useThrottle } from '@/hooks/useThrottle';
import { WindowSize } from '@/type';
import React, { useState, useEffect, createContext } from 'react';

// 创建一个Context对象，并给定默认值为空窗口大小
export const WindowSizeContext = createContext<WindowSize>({ width: 0 });

// 窗口大小提供者组件，在其内部监听窗口大小变化并提供新的窗口大小值
export function WindowSizeProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth
  });

  const handleResize = useThrottle(function handleResize() {
    setWindowSize({
      width: window.innerWidth
    });
  }, 500);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <WindowSizeContext.Provider value={windowSize}>
      {children}
    </WindowSizeContext.Provider>
  );
}
