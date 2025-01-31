import { Stack } from 'expo-router';

export default function AuthLayout() {
	return (
		<Stack
			screenOptions={{
				headerStyle: { backgroundColor: 'white' },
				headerTitleStyle: { fontSize: 15 },
				headerTintColor: 'black'
			}}
		>
			<Stack.Screen name="index" options={{ headerTitle: '', headerShown: false }} />
			<Stack.Screen name="signin" options={{ headerTitle: '로그인' }} />
			<Stack.Screen name="signup" options={{ headerTitle: '회원가입' }} />
		</Stack>
	);
}
