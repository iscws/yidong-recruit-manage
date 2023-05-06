import { WindowSizeContext } from '@/context/window-context';
import { WindowSize } from '@/type';
import { useContext } from 'react';

// 自定义hook，用于从任何子组件中获取当前窗口大小
export function useWindowSize(): WindowSize {
  return useContext(WindowSizeContext);
}
