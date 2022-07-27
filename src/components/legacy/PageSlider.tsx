import { Box, HStack, ScrollView, VStack } from 'native-base'
import { ReactNode, useState } from 'react'
import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

interface DotsProps {
  pageIndex: number
}

const Dots = (props: DotsProps) => (
  <HStack
    position="absolute"
    bottom="0"
    top="98%"
    left="0"
    right="0"
    justifyContent="center">
    {Array.from(Array(3).keys()).map((key, index) => (
      <Box
        bg="primary.button.color"
        h="10px"
        w="10px"
        borderRadius={5}
        ml="10px"
        style={[
          {
            opacity: props.pageIndex === index ? 1 : 0.2,
          },
        ]}
        key={index}>
        .
      </Box>
    ))}
  </HStack>
)

interface PageSliderProps {
  children: ReactNode
}

export const PageSlider = (props: PageSliderProps) => {
  const [sliderState, setSliderState] = useState({ currentPage: 0 })

  const setSliderPage = (event: any) => {
    const { currentPage } = sliderState
    const { x } = event.nativeEvent.contentOffset
    const indexOfNextScreen = Math.ceil(x / width)
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      })
    }
  }

  const { currentPage: pageIndex } = sliderState

  return (
    <VStack w={width} h={height}>
      <Dots pageIndex={pageIndex} />
      <ScrollView
        scrollEventThrottle={16}
        horizontal
        alwaysBounceVertical={false}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(event: any) => {
          setSliderPage(event)
        }}>
        {props.children}
      </ScrollView>
    </VStack>
  )
}
