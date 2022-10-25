import React from "react";
import { View, Linking } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// import { getAuth, signOut } from "firebase/auth";
import {
  Layout,
  Button,
  Text,
  TopNav,
  Section,
  SectionContent,
  useTheme,
  themeColor,
  
} from "react-native-rapi-ui";

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  const auth = null //getAuth();
  return (
    
    <Layout>
      <View
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 20,
        }}
      >
        <Section style={{margin: "0.1rem"}}>
          <SectionContent 
          style={
            {
              color: themeColor.white,
              backgroundColor: themeColor.primary500,
              cursor: "pointer"
            }
          }
          
        >
          <MaterialCommunityIcons onPress={() => navigation.navigate("Sales")} name="point-of-sale" size={100} style={{marginLeft: "0.07em"}} color="white"/>
          <Text onPress={() => navigation.navigate("Sales")}  style={{color:themeColor.white, fontWeight: "bold"}}>NUEVA VENTA</Text>
          </SectionContent>
        </Section>
        <Section style={{margin: "0.1rem"}}>
          <SectionContent>
            {/* <Text fontWeight="bold" style={{ textAlign: "center" }}>
              These UI components provided by Rapi UI
            </Text> */}
            {/* <Button
              style={{ marginTop: 10 }}
              text="Rapi UI Documentation"
              status="info"
              onPress={() => Linking.openURL("https://rapi-ui.kikiding.space/")}
            /> */}
            {/* <Button
              leftContent={
                <MaterialIcons name="bluetooth" size={24} color="white" />
              }
              text='CONNECT DEVICE BLUETOOTH'
              status="primary400"
            /> */}
            {/* <Button
              text="Go to second screen"
              onPress={() => {
                navigation.navigate("SecondScreen");// este es el boton que necesito para navegar por las screens
              }}
              style={{
                marginTop: 10,
              }}
            /> */} 
            {/* <Button
              status="danger"
              text="Logout"
              onPress={() => {
                signOut(auth);
              }}
              style={{
                marginTop: 10,
              }}
            /> */}
            {/* <Button
              text={isDarkmode ? "Light Mode" : "Dark Mode"}
              status={isDarkmode ? "success" : "warning"}
              onPress={() => {
                if (isDarkmode) {
                  setTheme("light");
                } else {
                  setTheme("dark");
                }
              }}
              style={{
                marginTop: 10,
              }}
            /> */}
          </SectionContent>
        </Section>
      </View>
    </Layout>
  );
}
