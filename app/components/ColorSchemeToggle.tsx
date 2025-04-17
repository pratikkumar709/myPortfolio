'use client';

import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  const toggleColor = () =>
    setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');

  return (
    <ActionIcon
      onClick={toggleColor}
      variant="outline"
      size="lg"
      aria-label="Toggle color scheme"
    >
      {computedColorScheme === 'dark' ? <IconSun /> : <IconMoon />}
    </ActionIcon>
  );
}
