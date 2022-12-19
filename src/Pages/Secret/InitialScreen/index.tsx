import { Button, Divider, Heading, ScrollView, Text, VStack } from 'native-base'
import { Image } from 'react-native'

const women = require('../../../Assets/women.png')

export const Initial = () => {
  return (
    <>
      <ScrollView>
        <VStack alignItems={'center'}>
          <Heading bold size="xl" color={'purple.500'} textAlign="center" mt="10">
            Você não está sozinha !
          </Heading>
          <Text fontSize="xs" textAlign="center" my="4" mx="4">
            Queremos ajudar. Para isso, basta que deixe aqui algumas informações. Por meio deste
            aplicativo, você pode fazer o pedido de medida protetiva, que será enviado diretamente
            para o(a) juiz(a).
          </Text>
          <Button bg={'purple.500'} mt="5" mx="20">
            <Text color={'white'}>Podemos prosseguir ?</Text>
          </Button>

          <Divider bg="muted.300" width={'300'} my="5" />
          <Text fontSize="xs" textAlign="center" mx="4">
            Não possui problemas e deseja ajudar quem precisa?{' '}
            <Text color="purple.500">clique aqui</Text>
          </Text>

          <Image source={women} />
        </VStack>
      </ScrollView>
    </>
  )
}
