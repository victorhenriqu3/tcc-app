import { Box, Text } from 'native-base'
import React from 'react'

import Cards from '../../../Assets/Data/cardsInfo.json'

export function CardsInfo() {
  return (
    <>
      {Cards.data.map(({ Title, Description }) => (
        <Box p="5" key={Title}>
          <Text fontSize={16} color={'white'} fontWeight="bold" pb="2">
            {Title}
          </Text>
          <Text fontSize={13} textAlign="justify" color={'white'}>
            {Description}
          </Text>
        </Box>
      ))}
    </>
  )
}
