import { Redirect, Stack } from 'expo-router';
import { useState } from 'react';

export default function AppLayout() {
	const [isLogin] = useState(false);

	if (!isLogin) {
		return <Redirect href="/(auth)" />;
	}

	return (
		<Stack>
			<Stack.Screen name="index" />
		</Stack>
	);
}
