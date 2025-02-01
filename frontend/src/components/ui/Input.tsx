import { ReactNode, useRef } from 'react';
import { Dimensions, Pressable, StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';

import { colors } from '../../styles/theme';

type InputProps = {
	disabled?: boolean;
	errorMessage?: string;
	icon?: ReactNode;
	touched?: boolean;
} & TextInputProps;

export default function Input({ disabled, errorMessage, icon, touched, style, ...rest }: InputProps) {
	const inputRef = useRef<TextInput | null>(null);

	const handleInputFocus = () => {
		inputRef.current?.focus();
	};

	return (
		<Pressable onPress={handleInputFocus}>
			<View
				style={[styles.container, disabled && styles.disabled, touched && Boolean(errorMessage) && styles.inputError]}
			>
				<TextInput
					ref={inputRef}
					editable={!disabled}
					placeholderTextColor={colors.GRAY_500}
					style={[styles.input, disabled && styles.disabled, style]}
					autoCapitalize="none"
					spellCheck={false}
					autoCorrect={false}
					{...rest}
				/>
				{touched && Boolean(errorMessage) && <Text style={styles.errorText}>{errorMessage}</Text>}
			</View>
		</Pressable>
	);
}

const deviceHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
	container: {
		borderWidth: 1,
		borderColor: colors.GRAY_200,
		padding: deviceHeight > 700 ? 15 : 10
	},
	input: {
		fontSize: 16,
		color: colors.BLACK,
		padding: 0
	},
	disabled: {
		backgroundColor: colors.GRAY_200,
		color: colors.GRAY_700
	},
	inputError: {
		borderWidth: 1,
		borderColor: colors.RED_300
	},
	errorText: {
		color: colors.RED_500,
		fontSize: 12,
		paddingTop: 5
	}
});
