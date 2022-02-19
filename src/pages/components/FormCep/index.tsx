import { Box, Button, Flex, FormLabel, Input, Stack } from "@chakra-ui/react"
import { ResultsCep } from "../ResultsCep";
import { useFormCep } from "./formCep.hooks"


export const FormCep = () => {
    const { onChangeForm, onClickForm, cepValueOFF } = useFormCep();
    return (
        <>
            <Flex
                flexDir={'column'}
                alignItems={'center'}
                justify={'center'}
            >
                <Box
                    bg={'red.700'}
                    as="form"
                    borderRadius={8}
                    p={8}
                    maxWidth={360}
                    display='block'

                >
                    <Stack spacing={3}>
                        <div>
                            <FormLabel htmlFor='number'>CEP</FormLabel>
                            <Input
                                type={'number'}
                                id='email'
                                name='email'
                                size={'lg'}
                                onChange={onChangeForm}
                            />
                        </div>
                    </Stack>
                    <Box textAlign={'center'}>
                        <Button
                            mt={5}
                            colorScheme={'blue'}
                            size={'lg'}
                            type='submit'
                            onClick={onClickForm}
                        >Buscar</Button>
                    </Box>
                </Box>
                <ResultsCep valueCep={cepValueOFF} />
            </Flex>
        </>
    )
}