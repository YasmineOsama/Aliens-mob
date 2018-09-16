import React from 'react';
import {
	View,
	ImageBackground,
	Text,
	TextInput,
	Button,
	Image,
	TouchableOpacity,
	Dimensions
} from 'react-native';
import { Header } from '../components';
import * as AliensServices from '../services/AliensService';
import * as AliensActions from '../actions/aliens';
import { connect } from 'react-redux';
import { ImagePicker, Permissions } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

class CreatAlien extends React.Component {
	static navigationOptions = {
		header: null
	};
	state = {
		image: null
	};
	takePhoto = async () => {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);

		if (status == 'granted') {
			let result = await ImagePicker.launchCameraAsync({
				allowsEditing: true,
				aspect: [4, 3]
			});

			if (result.cancelled) {
				return;
			}

			let localUri = result.uri;
			this.setState({ image: result.uri });
			let filename = localUri.split('/').pop();
			let match = /\.(\w+)$/.exec(filename);
			let type = match ? `image/${match[1]}` : `image`;
			let formData = new FormData();
			formData.append('image', { uri: localUri, name: filename, type });
		}
	};
	pickImage = async () => {
		const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
		if (status == 'granted') {
			let result = await ImagePicker.launchImageLibraryAsync({
				allowsEditing: true,
				aspect: [4, 3]
			});

			if (result.cancelled) {
				return;
			}
			let localUri = result.uri;
			this.setState({ image: result.uri });
			let filename = localUri.split('/').pop();
			let match = /\.(\w+)$/.exec(filename);
			let type = match ? `image/${match[1]}` : `image`;
			let formData = new FormData();
			formData.append('image', { uri: localUri, name: filename, type });
			formData.append('name', this.state.name);
			formData.append('desc', this.state.desc);

			this.setState({ formData });
		}
	};
	handleCreate = () => {
		AliensServices.createAlien(this.state.formData);
	};
	render() {
		let { image } = this.state;
		return (
			<ImageBackground
				source={require('../assets/images/bg-2.jpg')}
				style={{
					flex: 1,
					alignItems: 'center'
				}}
			>
				<View
					style={{
						backgroundColor: 'rgb(24, 66, 65)',
						opacity: 0.7,
						height: '100%',
						width: '100%',
						position: 'absolute'
					}}
				/>
				<Header title="ALIENS" navigation={this.props.navigation} />
				<View
					style={{
						width: '100%',
						justifyContent: 'space-between',
						height: '70%',
						marginTop: 5
					}}
				>
					<Text
						style={{
							color: 'white',
							fontSize: 25,
							fontFamily: 'AmericanTypewriter',
							letterSpacing: 5
						}}
					>
						Create Alien
					</Text>
					<View
						style={{
							alignItems: 'center',
							justifyContent: 'center',
							width: '100%',
							height: '50%',
							marginTop: height * 0.002
						}}
					>
						{image && (
							<Image
								source={{ uri: image }}
								style={{
									width: 140,
									height: 140,
									borderRadius: 70
								}}
							/>
						)}
						{!image && (
							<Image
								source={require('../assets/images/alien-3.jpg')}
								style={{
									width: 140,
									height: 140,
									borderRadius: 70
								}}
							/>
						)}
						<View
							style={{
								alignSelf: 'center',
								flexDirection: 'row',
								justifyContent: 'space-between',
								paddingLeft: 10,
								paddingRight: 10,
								paddingBottom: 10,
								paddingTop: 10,
								width: '22%'
							}}
						>
							<TouchableOpacity onPress={this.takePhoto}>
								<Icon size={width * 0.06} color="white" name="camera" />
							</TouchableOpacity>
							<TouchableOpacity onPress={this.pickImage}>
								<Icon size={width * 0.06} color="white" name="image" />
							</TouchableOpacity>
						</View>
					</View>

					<TextInput
						placeholder="Name"
						placeholderTextColor="rgba(255,255,255,0.5)"
						style={{
							height: '8%',
							backgroundColor: 'rgba(0,0,0,0.4)',
							width: '100%',
							color: 'white',
							paddingLeft: 10,
							paddingRight: 10,
							borderRadius: 12
						}}
						onChangeText={name => this.setState({ name })}
					/>
					<TextInput
						placeholder="Description..."
						placeholderTextColor="rgba(255,255,255,0.5)"
						style={{
							height: '18%',
							backgroundColor: 'rgba(0,0,0,0.4)',
							width: '100%',
							color: 'white',
							paddingLeft: 10,
							paddingRight: 10,
							borderRadius: 12
						}}
						multiline={true}
						onChangeText={desc => this.setState({ desc })}
					/>
					<TouchableOpacity
						style={{
							width: '75%',
							alignItems: 'center',
							alignSelf: 'center',
							justifyContent: 'center',
							backgroundColor: 'rgba(11, 11, 11, 0.75)',
							borderRadius: 10,
							height: '10%'
						}}
						onPress={this.handleCreate}
					>
						<Text
							style={{
								color: 'white',
								fontSize: 17,
								fontFamily: 'AmericanTypewriter',
								letterSpacing: 2
							}}
						>
							Create
						</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		);
	}
}

export default CreatAlien;
