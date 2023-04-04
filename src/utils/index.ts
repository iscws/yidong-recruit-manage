import { MenuItemType } from '@/type';

// 截取字符串，并将其转为数字
export function substrNum(str: string): number {
  return Number(str.slice(-1));
}

// 封装一下menuItem添加数据的方法
export function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItemType[]
): MenuItemType {
  return {
    key,
    icon,
    children,
    label
  } as MenuItemType;
}
