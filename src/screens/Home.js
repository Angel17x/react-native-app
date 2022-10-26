import React, {useState} from "react";
import { View, Linking, TouchableOpacity } from "react-native";
import { Layout, Text, useTheme,} from "react-native-rapi-ui";
import BLE from "react-native-ble-manager";

export default function ({ navigation }) {
  
  const [enable, setEnable] = useState({enable: false})

  const TestConnection = () => {
    console.log("aqui toy")
    console.log(BLE.enableBluetooth)
    BLE.enableBluetooth().then(() => console.log("enable")).catch(err => console.log(err))
  }
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
        <TouchableOpacity onPress={()=>TestConnection()} style={{width: '100%', height: 50, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: 'blue'}}>
          <Text style={{color: "white"}}>
            Conectar bluetooth
          </Text>
        </TouchableOpacity>
       
    
     
      </View>
    </Layout>
  );
}
