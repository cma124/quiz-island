import { useEffect } from "react";
import { useRouter } from "expo-router";
import { createSession } from "@/lib/api";

export default function StartQuiz() {
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const sessionId = await createSession();
      router.replace(`/quiz/${sessionId}`);
    })();
  }, []);

  return null;
}
