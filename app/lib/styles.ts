'use client';

import { useComputedColorScheme } from '@mantine/core';

export function useButtonThemeStyle() {
  const scheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  return {
    color: scheme === 'dark' ? 'white' : 'black',
    backgroundColor: scheme === 'dark' ? '#333' : '#f4f4f4',
    border: '1px solid',
    borderColor: scheme === 'dark' ? '#555' : '#ccc',
  };
}
