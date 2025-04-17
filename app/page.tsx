'use client'

import { Title, Text, Container, Button } from '@mantine/core';
import { useButtonThemeStyle } from './lib/styles';


export default function Home(){

  const buttonStyle = useButtonThemeStyle();


  return(
    <Container>
      <Button style={buttonStyle}>Hello I am a button</Button>
    </Container>
  )
}