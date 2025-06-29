import { Link } from "expo-router";
import { View, Text } from "react-native";
import { Button } from "@/components/Button";
import "../global.css";
import {Image} from "react-native";

export default function HomeScreen() {
  return (
      <View className="flex-1 items-center justify-center bg-white space-y-6">
        <Image source={require('../assets/images/island-icon.png')} style={{width: 230, height: 230, marginBottom: 50}} />
        <Text className="text-4xl font-bold mb-12">QUIZ ISLAND</Text>
        <Link href="/quiz" asChild>
          <Button label="START QUIZ"/>
        </Link>
      </View>
  );
}
