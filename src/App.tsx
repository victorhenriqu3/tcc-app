import { NativeBaseProvider } from 'native-base'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Initial } from './Pages/Secret/InitialScreen'

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <Initial />
      </SafeAreaView>
    </NativeBaseProvider>
  )
}
