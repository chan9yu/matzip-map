import { Dimensions, Pressable, PressableProps, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../styles/theme';

type ButtonProps = {
	label: string;
	size?: 'large' | 'medium';
	variant?: 'filled' | 'outlined';
} & PressableProps;

export default function Button({ label, disabled = false, size = 'large', variant = 'filled', ...rest }: ButtonProps) {
	return (
		<Pressable
			disabled={disabled}
			style={({ pressed }) => [
				styles.container,
				disabled && styles.disabled,
				pressed ? styles[`${variant}Pressed`] : styles[variant]
			]}
			{...rest}
		>
			<View style={styles[size]}>
				<Text style={[styles.text, styles[`${variant}Text`]]}>{label}</Text>
			</View>
		</Pressable>
	);
}

const deviceHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		borderRadius: 3
	},
	disabled: {
		opacity: 0.5
	},
	text: {
		fontSize: 16,
		fontWeight: '700'
	},

	// variant
	filled: {
		backgroundColor: colors.PINK_700
	},
	outlined: {
		borderColor: colors.PINK_700,
		borderWidth: 1
	},
	filledPressed: {
		backgroundColor: colors.PINK_500
	},
	outlinedPressed: {
		borderColor: colors.PINK_700,
		borderWidth: 1,
		opacity: 0.5
	},
	filledText: {
		color: colors.WHITE
	},
	outlinedText: {
		color: colors.PINK_700
	},

	// size
	large: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		paddingVertical: deviceHeight > 700 ? 15 : 10
	},
	medium: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		paddingVertical: deviceHeight > 700 ? 12 : 8
	}
});
