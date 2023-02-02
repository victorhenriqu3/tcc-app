import { Box, Text } from 'native-base'

export function Card({ Title, Explanation }) {
  return (
    <>
      <Box
        p={'5'}
        background={'white'}
        width={'300px'}
        borderRadius={20}
        marginLeft={3}
        marginRight={3}
        marginBottom={4}
      >
        <Text fontSize={16} color={'purple.500'} textAlign={'center'} fontWeight="bold" pb="2">
          {Title}
        </Text>
        <Text fontSize={13} textAlign="justify">
          {Explanation}
        </Text>
      </Box>
    </>
  )
}
