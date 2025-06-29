import { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { getSummary } from "@/lib/api";
import { useLocalSearchParams, Link } from "expo-router";
import { ScoreBanner } from "@/components/ScoreBanner";
import { Button } from "@/components/Button";
import "../../global.css";

export default function ResultScreen() {
  const { sessionId } = useLocalSearchParams();
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const res = await getSummary(sessionId as string);
      setResult(res);
    })();
  }, []);

  const getResultImage = () => {
    if (result.score >= 0 && result.score <= 4) {
      return require('../../assets/images/fail-icon.png');
    } else if (result.score >= 5 && result.score <= 7) {
      return require('../../assets/images/pass-icon.png');
    } else if (result.score >= 8 && result.score <=10) {
      return require('../../assets/images/excellent-icon.png');
    }
  };

  if (!result) {
    return null
  }

  return (
      <View className="flex-1 items-center justify-center bg-white px-4">
        <Image source={getResultImage()} style={{width: 120, height: 120, marginBottom: 30}} />

        <Text className="text-4xl font-bold mb-5">QUIZ ENDING</Text>
        <Text className="text-xl font-bold mb-4">Score is:</Text>
        <Text className="text-5xl font-bold mb-10">{result.score} / {result.submittedQuestions}</Text>
        <ScoreBanner score={result.score} />
        <Link href="/" asChild className="mt-10">
          <Button label="Back to Home" />
        </Link>
      </View>
  );
}
