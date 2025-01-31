import { Slot } from 'expo-router';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';

export default function Layout() {
	return (
		<SafeAreaProvider initialMetrics={initialWindowMetrics}>
			<Slot />
		</SafeAreaProvider>
	);
}
