import {View, Text} from 'react-native'
import React from 'react'
import { Button } from "@/components/Button";

const ResultCard = ({answer, onNext}: any) => {
  const handleOnNext = (hideCard: boolean) => {
    setTimeout(() => onNext(hideCard), 500);
  }

  return (
      <View className="absolute w-full h-full flex-1 justify-center items-center">
        <View className="relative w-5/6 h-2/3 bg-amber-50 border-2 justify-center items-center">

            <Text className="mb-10 text-2xl text-center font-semibold">Your Answer is</Text>

            <Text className="mb-16 text-6xl text-center font-bold">{answer ? 'Correct' : 'Incorrect'}</Text>

            <Button label="NEXT" onPress={() => handleOnNext(false)} />

        </View>
      </View>
  )
}
export default ResultCard
