import {useEffect, useRef, useState} from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import "../global.css";

export default function QuestionCard({ question, onAnswer }: any) {
  const [selected, setSelected] = useState<string | null>(null);
  const [minute, setMinute] = useState<number>(0);
  const [second, setSecond] = useState<number>(0);
  const [startTime, setStartTime] = useState(Date.now());

  const timerRef = useRef<NodeJS.Timer | null>(null);

  const resetTimer = () => {
    setMinute(0);
    setSecond(0);
    setStartTime(Date.now());
  };

  const handleSelect = (choiceId: string) => {
    const timeSpent = (Date.now() - startTime) / 1000;
    console.log(`Time spent for ${question.title} - ${timeSpent}`);
    setSelected(choiceId);

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    setTimeout(() => onAnswer(choiceId, timeSpent), 500);
  };

  useEffect(() => {
    resetTimer();

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      setSecond((prevSecond) => {
        if (prevSecond === 59) {
          setMinute((prevMinute) => prevMinute + 1);
          return 0;
        }

        return prevSecond + 1;
      });

      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      }
    }, 1000);
  }, [question]);

  return (
      <View className="flex-1 justify-center bg-white p-6 space-y-6">
        <View className="absolute z-10 top-2 right-2">
          <Image source={require('../assets/images/timer-icon.gif')} style={{width: 60, height: 60}} />

          <Text className="text-lg font-bold">{minute.toString().padStart(2, "0")} : {second.toString().padStart(2, "0")}</Text>
        </View>

        <Text className="text-2xl mb-5 font-bold">{question.title}</Text>

        {question.choices.map((choice: any) => (
            <TouchableOpacity
                key={choice.choiceId}
                onPress={() => handleSelect(choice.choiceId)}
                className="bg-gray-100 py-5 my-2 rounded-lg"
            >
              <Text className="text-lg text-center font-semibold">{choice.title}</Text>
            </TouchableOpacity>
        ))}
      </View>
  );
}
