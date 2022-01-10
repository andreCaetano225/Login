import { Button, Flex, FormLabel, HStack, Input, Stack, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'



const Home: NextPage = () => {
  return (
    <Flex 
      alignItems={'center'}
      justify={'center'}
      w={'100vw'}
      h={'100vh'}
    >
      <Flex
      as="form"
      bg={'red.700'}
      maxWidth={360}
      p={8}
      borderRadius={8}
      flexDir={'column'}
      >
      <Stack spacing={3}>
        <div>
      <FormLabel htmlFor='email'>E-mail</FormLabel>
        <Input
          type={'email'}
          id='email'
          name='email'
          size={'lg'}
        />
        </div>
        <div>

        <FormLabel htmlFor='password'>Senha</FormLabel>
        <Input
          type={'password'}
          id='password'
          name='password'
          size={'lg'}
          />
        </div>
        </Stack>
        <Button mt={5} colorScheme={'blue'} size={'lg'} type='submit'>Entrar</Button>
      </Flex>
    </Flex>
  )
}

export default Home
