import React, { useState } from "react";
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
// import bluetoothPlx from "../components/bluetooth";
import {
  Layout,
  TopNav,
  Text,
  themeColor,
  useTheme,
  Section,
  SectionContent,
  Button
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

export default function ({ navigation }) {
  const { isDarkmode } = useTheme();
  return (
    <Layout>
      <TopNav
        middleContent="Nueva venta"
        middleTextStyle={{color: themeColor.primary500}}
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.primary500}
          />
        }
        leftAction={() => navigation.goBack()}
      />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
    <Button
        style={{ fontSize: ".8em" }}
        leftContent={<MaterialIcons name="bluetooth" size={20} color="white" />}
        text='CONECTAR'
        status="primary500"
        // onPress={() => bluetoothPlx.Create()}
    /> 
      </View>
    </Layout>
  );
}
