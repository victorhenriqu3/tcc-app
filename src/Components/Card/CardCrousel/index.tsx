import { Box, Text } from 'native-base'
import { ScrollView } from 'react-native'

import cardsCarousel from '../../../Assets/Data/cardsCarousel.json'
import { Card } from './Card'
export function CarouselCards() {
  return (
    <>
      <Box p="5">
        <Text fontSize={16} color={'white'} fontWeight="bold" pb="2">
          Tipos de violência contra a mulher
        </Text>
        <Text fontSize={13} textAlign="justify" color={'white'}>
          Quando falamos em violência contra a mulher, pensamos apenas em agressões físicas. No
          entanto, os tipos de violência praticados contra mulheres não se resumem à agressão que
          resulta em lesão corporal. A Lei Maria da Penha, dispositivo legal que dispõe a favor da
          punição de agressores em casos de violência doméstica, discrimina cinco tipos de violência
          que podem ser praticados contra a mulher. São eles:
        </Text>
      </Box>
      <ScrollView horizontal>
        {cardsCarousel.data.map(({ Title, Explanation }) => (
          <>
            <Card key={Title} Title={Title} Explanation={Explanation} />
          </>
        ))}
      </ScrollView>
    </>
  )
}
