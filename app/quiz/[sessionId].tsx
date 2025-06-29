import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import { getQuestions, postAnswer } from "@/lib/api";
import QuestionCard from "../../components/QuestionCard";
import ResultCard from "@/components/ResultCard";

export default function QuizScreen() {
  const { sessionId } = useLocalSearchParams();
  const router = useRouter();
  const [question, setQuestion] = useState<any>(null);
  const [answer, setAnswer] = useState<boolean>(false);
  const [showResultCard, setShowResultCard] = useState<boolean>(false);

  useEffect(() => {
    console.log('Session Id in [sessionId].tsx:', sessionId);
    loadQuestion();
  }, []);

  const loadQuestion = async () => {
    const q = await getQuestions(sessionId as string);

    if (!q) {
      router.replace({ pathname: "/quiz/result", params: { sessionId } });
    } else {
      setQuestion(q);
    }
  };

  const handleAnswer = async (choiceId: string, timeSpent: number) => {
    const res = await postAnswer(sessionId as string, question.questionId, choiceId, timeSpent);

    setAnswer(res.isCorrect);
    console.log('res.isCorrect:', res.isCorrect);
    setShowResultCard(true);
  };

  const handleNext = (showResult: boolean) => {
    setShowResultCard(showResult);
    loadQuestion();
  }

  if (!question) return null;

  return (
    <>
      <QuestionCard
          question={question}
          onAnswer={handleAnswer}
      />

      { showResultCard && <ResultCard answer={answer} onNext={handleNext} /> }
    </>
  );
}
