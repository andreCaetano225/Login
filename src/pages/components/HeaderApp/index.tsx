import { Box, Text } from "@chakra-ui/react"


export const HeaderApp = () => {
    return (
        <>
            <Box
                textAlign={'center'}
                marginTop={'280px'}
                marginLeft={'0px'}
                marginRight={'0px'}

            >
                <Text
                    fontSize={'32px'}
                    fontWeight={'600'}
                >
                    Digite um CEP para buscar informações
                </Text>
            </Box>
        </>
    )
}