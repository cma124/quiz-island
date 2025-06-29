import { View, Text } from "react-native";
import "../global.css";

export const ScoreBanner = ({ score }: { score: number }) => {
  let result = "Fail";
  let colors = {
    bgColor: 'bg-red-100',
    txtColor: 'text-red-800'
  };

  if (score >= 5 && score <= 7) {
    result = "Pass";
    colors.bgColor = 'bg-green-100';
    colors.txtColor = 'text-green-800'
  } else if (score >= 8) {
    result = "Excellent";
    colors.bgColor = 'bg-amber-300';
    colors.txtColor = 'text-amber-700';
  }

  return (
      <View className={`p-4 mb-10 rounded-md ${colors.bgColor}`}>
        <Text className={`text-xl font-bold ${colors.txtColor}`}>Result: {result}</Text>
      </View>
  );
};
