import { router } from 'expo-router';
import { Button, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
	return (
		<SafeAreaView style={styles.container} edges={['top', 'right', 'bottom', 'left']}>
			<View>
				<Button title="로그인화면으로 이동" onPress={() => router.navigate('/signin')} />
				<Button title="회원가입화면으로 이동" onPress={() => router.navigate('/signup')} />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
