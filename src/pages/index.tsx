import { Box, Button, Flex, FormLabel, HStack, Input, Stack, Text, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { FormCep } from './components/FormCep';
import { HeaderApp } from './components/HeaderApp';




const Home: NextPage = () => {
  return (
    <>
      <HeaderApp />
      <Flex
        alignItems={'center'}
        justify={'center'}
        w={'99vw'}
        h={'100vh'}
        marginTop={'-300px'}
      >
        <FormCep />
      </Flex>
    </>
  )
}

export default Home
