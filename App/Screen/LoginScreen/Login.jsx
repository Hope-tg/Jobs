import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function Login() {
  return (
    // <View className="bg-slate-600 p-5">
    <>
      <View className="p-1 bg-black rounded-2xl">
        <Image
          source={require("../../../assets/Images/login.png")}
          className=" h-[500px] w-[250px] rounded-xl  "
        />
      </View>

      <View className="w-full h-full bg-[#8E3FFF] rounded-t-3xl px-4 py-3 flex-1 items-center ">
        <Text className="text-2xl text-white text-center">
          Let's find <Text className="font-bold">Professional cleaning </Text>
          and repair service{" "}
        </Text>
        <Text className="text-white text-xl mt-2 text-center">
          Best App to find services near you which deliver you progfessional
          service
        </Text>
        {/* </View> */}
        <TouchableOpacity className="px-3 py-2 mt-7  bg-white w-[80%] rounded-3xl">
          <Text
            onPress={() => alert('it work')}
            className="text-[#8E3FFF] text-xl text-center "
          >
            Let's Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
