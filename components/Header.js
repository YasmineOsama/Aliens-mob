import React from 'react';
import {
	Text,
	View,
	ImageBackground,
	TextInput,
	TouchableOpacity,
	Dimensions
} from 'react-native';
import AuthService from '../services/AuthService';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');
const Auth = new AuthService();

export const Header = props => {
	const signOut = () => {
		Auth.logout();
		props.navigation.navigate('Home');
	};
	return (
		<View
			style={{
				width: '100%',
				height: '10%',
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			<Text
				style={{
					color: 'white',
					fontSize: 30,
					fontFamily: 'AmericanTypewriter',
					letterSpacing: 10,
					paddingTop: '5%'
				}}
			>
				{props.title}
			</Text>
			<View
				style={{
					alignSelf: 'flex-end',
					position: 'absolute',
					paddingRight: 10,
					paddingTop: 18
				}}
			>
				<TouchableOpacity onPress={signOut}>
					<Icon size={width * 0.077} color="white" name="sign-out" />
				</TouchableOpacity>
			</View>
		</View>
	);
};
