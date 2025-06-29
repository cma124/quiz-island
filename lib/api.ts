import axios from "axios";

const API = "https://webapi.icydune-a1052ab7.southeastasia.azurecontainerapps.io/api/v1/Quiz";

export const createSession = async () => {
  const { data } = await axios.post(`${API}/Session`);
  return data.data.sessionId;
};

export const getQuestions = async (sessionId: string) => {
  const { data } = await axios.get(`${API}/Questions/${sessionId}`);
  return data.data;
};

export const postAnswer = async (sessionId: string, questionId: string, choiceId: string, timeSpent: number) => {
  const { data } = await axios.post(`${API}/Answer`, {
    sessionId,
    questionId,
    choiceId,
    timeSpent,
  });
  return data.data;
};

export const getSummary = async (sessionId: string) => {
  const { data } = await axios.get(`${API}/Summary/${sessionId}`);
  return data.data;
};
