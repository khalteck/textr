import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Register() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-primary">
      <ScrollView className="flex-1 px-5">
        <View className="py-10 flex justify-center items-center">
          <Text className="font-bold text-2xl">Register</Text>
          <TouchableOpacity
            onPress={() => router.push("/")}
            className="px-5 py-2 bg-blue-200 rounded-md mt-5"
          >
            <Text>Home</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
