import { images } from "@/constants/images";
import { Link, useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Login() {
  const router = useRouter();

  return (
    <>
      <View className="flex-1 bg-primary-100">
        <View className="w-[90%] mx-auto flex-col px-5 min-h-screen-safe">
          <View className="w-full h-[500px] py-10 flex flex-col justify-end items-center">
            <Text className="font-bold text-[2.75rem] text-app_white text-center">
              Textr
            </Text>
            <Image
              source={images.homeImage}
              className="w-full h-[300px] mt-5"
            />
          </View>

          <View className="w-full mx-auto mt-10">
            <Text className="font-bold text-[3rem] text-app_white text-center">
              Connect with your friends
            </Text>
            <Text className="text-[1.2rem] mt-5 text-app_white/70 text-center leading-[1.7rem]">
              Start your new social journey with Textr. Connect together with
              your friends, send messages or call quickly and easily
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => router.push("/register")}
            className="w-full flex justify-center items-center p-5 bg-secondary-100 rounded-xl mt-12 mx-auto"
          >
            <Text className="w-full text-[1.2rem] font-bold text-center text-app_white">
              Get Started
            </Text>
          </TouchableOpacity>
          <View className="flex flex-row justify-center items-center gap-2 mt-6">
            <Text className="text-app_white/70">Already have an account?</Text>
            <Link href="/login" className="text-secondary-100 font-bold">
              Login
            </Link>
          </View>
        </View>
      </View>
    </>
  );
}
