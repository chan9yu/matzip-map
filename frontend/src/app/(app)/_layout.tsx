import { Redirect } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function AppLayout() {
	const [isLogin] = useState(false);

	if (!isLogin) {
		return <Redirect href="/(auth)" />;
	}

	return (
		<GestureHandlerRootView style={styles.container}>
			<Drawer>
				<Drawer.Screen name="index" />
				<Drawer.Screen name="feed" />
				<Drawer.Screen name="calendar" />
			</Drawer>
		</GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
