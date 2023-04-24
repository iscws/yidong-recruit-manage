import { MenuItemType } from '@/type';
import React from 'react';

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

// 将毫秒转化为 YY-MM-DD的格式
export function formatDate(dateObj: Date) {
  const year = dateObj.getFullYear().toString();
  const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  const date = dateObj.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${date}`;
}

// 翻转map数组的key和value
export function reverseMap<K, V>(map: Map<K, V>): Map<V, K> {
  const reverse = new Map<V, K>();
  for (const [key, value] of map) {
    reverse.set(value, key);
  }
  return reverse;
}
