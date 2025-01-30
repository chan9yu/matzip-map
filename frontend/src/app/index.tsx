import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
	return (
		<SafeAreaView style={styles.container} edges={['top', 'right', 'bottom', 'left']}>
			<Text>Home Screen</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
