import React from 'react';
import {
	Text,
	View,
	Image,
	TouchableOpacity,
	ScrollView,
	TextInput,
	Dimensions,
	KeyboardAvoidingView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AdminControls } from './';
const { width, height } = Dimensions.get('window');

class Admin extends React.Component {
	render() {
		const props = this.props;
		if (props.user && props.user.admin) {
			return (
				<AdminControls
					handleDelete={props.handleDelete}
					onClickEdit={props.onClickEdit}
				/>
			);
		}
		return null;
	}
}
class NameForm extends React.Component {
	render() {
		const props = this.props;
		return props.editForm ? (
			<View
				style={{
					backgroundColor: 'rgba(229, 255, 227, 0.5)',
					borderRadius: 10,
					paddingLeft: '3%',
					paddingTop: '1%',
					marginTop: '2%',
					height: '20%'
				}}
			>
				<TextInput
					style={{
						color: 'black',
						fontSize: 14,
						fontFamily: 'AmericanTypewriter-Bold',
						letterSpacing: 3
					}}
					returnKeyType="done"
					value={props.alien.name}
					onChangeText={props.onNameChange}
				/>
			</View>
		) : (
			<Text
				style={{
					color: 'white',
					fontSize: 14,
					fontFamily: 'AmericanTypewriter-Bold',
					letterSpacing: 3,
					paddingLeft: '3%',
					paddingTop: '3%'
				}}
			>
				{props.alien.name}
			</Text>
		);
	}
}

class DescForm extends React.Component {
	render() {
		const props = this.props;
		return props.editForm ? (
			<View
				style={{
					backgroundColor: 'rgba(229, 255, 227, 0.5)',
					borderRadius: 10,
					padding: '3%'
				}}
			>
				<TextInput
					style={{
						color: 'black',
						fontSize: 14,
						fontFamily: 'AmericanTypewriter-Light',
						letterSpacing: 3
					}}
					returnKeyType="done"
					value={props.alien.desc}
					onChangeText={props.onDescChange}
					multiline={true}
				/>
			</View>
		) : (
			<Text
				style={{
					padding: '3%',
					color: 'white',
					fontSize: 14,
					fontFamily: 'AmericanTypewriter-Light',
					letterSpacing: 3
				}}
			>
				{props.alien.desc}
			</Text>
		);
	}
}
class UpdateButton extends React.Component {
	render() {
		const props = this.props;
		return props.editForm ? (
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
					width: '100%'
				}}
			>
				<TouchableOpacity
					style={{
						width: '60%',
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: 'rgba(11, 11, 11, 0.75)',
						borderRadius: 10,
						height: '60%'
					}}
					onPress={props.handleUpdate}
				>
					<Text
						style={{
							color: 'white',
							fontSize: 15,
							fontFamily: 'AmericanTypewriter',
							letterSpacing: 2
						}}
					>
						Update
					</Text>
				</TouchableOpacity>
			</View>
		) : null;
	}
}
export class ProfilePage extends React.Component {
	constructor(props) {
		super();
	}
	render() {
		const props = this.props;

		return (
			<View
				style={{
					width: '100%',
					height: '86%'
				}}
			>
				<KeyboardAvoidingView
					contentContainerStyle={{ width: '100%', height: '100%' }}
					behavior="position"
				>
					<Image
						style={{
							width: '100%',
							height: '60.8%'
						}}
						source={require('../assets/images/alien-3.jpg')}
					/>
					<View
						style={{
							width: '100%',
							height: '30.3%',
							alignSelf: 'center',
							borderTopColor: 'white',
							borderTopWidth: height * 0.007
						}}
					>
						<View
							style={{
								backgroundColor: 'black',
								opacity: 0.7,
								height: '100%',
								width: '100%',
								position: 'absolute'
							}}
						/>
						<NameForm {...props} />
						<ScrollView
							style={{
								marginTop: '2%',
								marginBottom: '3%'
							}}
						>
							<DescForm {...props} />
						</ScrollView>
					</View>
					<Admin {...props} />
					<UpdateButton {...props} />
				</KeyboardAvoidingView>
			</View>
		);
	}
}
