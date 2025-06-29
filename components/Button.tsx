import { Text, TouchableOpacity } from "react-native";
import "../global.css";

export const Button = ({ label, onPress }: { label: string; onPress?: () => void }) => (
    <TouchableOpacity
        onPress={onPress}
        className="bg-blue-500 px-12 py-4 rounded-lg shadow-lg"
    >
      <Text className="text-white font-bold text-lg text-center">{label}</Text>
    </TouchableOpacity>
);
