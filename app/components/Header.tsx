'use client';

import { Group, Title } from '@mantine/core';
import { ColorSchemeToggle } from './ColorSchemeToggle';

export default function Header() {
  return (
    <Group h="100%" px="md" justify="space-between">
      <Title order={3}>My Portfolio</Title>
      <ColorSchemeToggle />
    </Group>
  );
}
