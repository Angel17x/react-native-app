import React, {useState} from "react";
import { View, Linking, TouchableOpacity } from "react-native";
// import { Ionicons } from '@expo/vector-icons';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { getAuth, signOut } from "firebase/auth";

// implementacion bluetooth 

import RNBluetoothClassic, {
  BluetoothDevice
} from 'react-native-bluetooth-classic';


import { Layout, Text, useTheme,} from "react-native-rapi-ui";

export default function ({ navigation }) {
  // const { isDarkmode, setTheme } = useTheme();
  // const auth = null //getAuth();
  const [data, setData] = useState("")


  const TestConnection = async () => {
    console.log('A');
    try {
      var a = RNBluetoothClassic.isBluetoothEnabled();
      console.warn(a)
      // setData({ available });
      // console.log(data);
    } catch (err) {
      // Handle accordingly
    }

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
