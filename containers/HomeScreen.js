import React from 'react';
import {
	Text,
	View,
	ImageBackground,
	TextInput,
	TouchableOpacity,
	Alert
} from 'react-native';
import AuthService from '../services/AuthService';
import * as UsersActions from '../actions/users';
import { connect } from 'react-redux';

const Auth = new AuthService();

class HomeScreen extends React.Component {
	static navigationOptions = {
		header: null
	};
	state = {
		username: '',
		password: ''
	};
	handleOnSubmit = () => {
		Auth.login(this.state.username.toLowerCase(), this.state.password)
			.then(res => {
				this.props.navigation.navigate('Main');
				Auth.getProfile().then(res => this.props.setCurrentUser(res));
			})
			.catch(err => {
				Alert.alert('Wrong username or password');
			});
	};
	render() {
		return (
			<ImageBackground
				source={require('../assets/images/bg-1.jpg')}
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<View
					style={{
						backgroundColor: 'black',
						opacity: 0.5,
						height: '100%',
						width: '100%',
						position: 'absolute'
					}}
				/>
				<View
					style={{
						width: '100%',
						alignItems: 'center',
						justifyContent: 'space-between',
						height: '32%'
					}}
				>
					<Text
						style={{
							color: 'white',
							fontSize: 30,
							fontFamily: 'AmericanTypewriter',
							letterSpacing: 10
						}}
					>
						SIGN IN
					</Text>
					<TextInput
						placeholder="Username"
						placeholderTextColor="rgba(255,255,255,0.5)"
						style={{
							height: '20%',
							backgroundColor: 'rgba(0,0,0,0.4)',
							width: '75%',
							color: 'white',
							paddingLeft: 10,
							paddingRight: 10,
							borderRadius: 12
						}}
						onChangeText={username => this.setState({ username })}
					/>
					<TextInput
						secureTextEntry={true}
						placeholder="********"
						placeholderTextColor="rgba(255,255,255,0.5)"
						style={{
							height: '20%',
							backgroundColor: 'rgba(0,0,0,0.4)',
							width: '75%',
							color: 'white',
							paddingLeft: 10,
							paddingRight: 10,
							borderRadius: 12
						}}
						onChangeText={password => this.setState({ password })}
					/>
					<TouchableOpacity
						style={{
							width: '75%',
							alignItems: 'center',
							justifyContent: 'center',
							backgroundColor: 'rgba(21, 116, 65, 0.9)',
							borderRadius: 10,
							height: '17%'
						}}
						onPress={this.handleOnSubmit}
					>
						<Text
							style={{
								color: 'white',
								fontSize: 15,
								fontFamily: 'AmericanTypewriter',
								letterSpacing: 2
							}}
						>
							LOGIN
						</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return { setCurrentUser: res => dispatch(UsersActions.setCurrentUser(res)) };
};

export default connect(
	null,
	mapDispatchToProps
)(HomeScreen);
