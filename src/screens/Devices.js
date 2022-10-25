import React from 'react';
import { View } from 'react-native';
import { useState } from 'react';
import { Layout, Text } from 'react-native-rapi-ui';
// import RNBluetoothClassic, { BluetoothEventType } from 'react-native-bluetooth-classic';

export default async function ({ navigation }) {
	// const [available, setAvailable] = useState({ available: false});
	// try {
	// 	let supportDevice = await RNBluetoothClassic.isBluetoothAvailable();
	// 	this.setAvailable({ available: supportDevice });
	//   } catch (err) {
	// 	console.log(err)
	//   }
	return (
		<Layout>
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Text>This is the Profile tab</Text>
			</View>
		</Layout>
	);
}
