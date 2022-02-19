import { Box, Flex, Text } from "@chakra-ui/react";
import { PropsResultsCep, useResultsCep } from "./resultsCep.hooks"


export const ResultsCep = (props: PropsResultsCep) => {
    const { cep } = useResultsCep(props);
    return (
        <>
            {props.valueCep ? (
                <Box
                    bg={'#FFF'}
                    width={'600px'}
                    color={'#333'}
                    marginTop={'30px'}
                    borderRadius={8}

                >
                    <Flex
                        alignItems={'center'}
                        justifyContent={'center'}
                    >
                        <Text
                            padding={'10px'}
                            marginRight={'20px'}
                            display='flex'
                        >
                            CEP: {cep?.cep}
                            <Text marginLeft={'10px'}> UF: {cep?.uf}</Text>
                            <Text marginLeft={'10px'}>BAIRRO: {cep?.bairro}</Text>
                            <Text marginLeft={'10px'}>RUA: {cep?.logradouro}</Text>
                        </Text>
                    </Flex>
                    <Flex
                        alignItems={'center'}
                        justifyContent={'center'}
                    >
                        <Text
                            padding={'10px'}
                            marginRight={'20px'}
                            display='flex'
                        >
                            <Text marginLeft={'10px'}> LOCALIDADE: {cep?.localidade}</Text>
                            <Text marginLeft={'10px'}>DDD: ({cep?.ddd})</Text>
                        </Text>
                    </Flex>
                </Box>
            ) : (null)}
        </>
    )
}