import React from 'react';
import {
	AsyncStorage,
	Text,
	View,
	ImageBackground,
	TextInput,
	TouchableOpacity,
	Alert,
	Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import * as AliensActions from '../actions/aliens';
import * as AliensServices from '../services/AliensService';
import { SwipingList, Header, LoadingScreen } from '../components';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');
class MainScreen extends React.Component {
	static navigationOptions = {
		header: null
	};
	componentWillMount() {
		AliensServices.loadAliens_Main().then(response =>
			this.props.loadAliens(response)
		);
	}
	handleOnClick = () => {
		this.props.navigation.navigate('List', {
			onCardClick: this.onCardClick
		});
	};
	onCardClick = alienId => {
		this.props.navigation.navigate('Profile', { alienId });
	};

	render() {
		const CreatAlien = () => {
			if (this.props.user && this.props.user.admin) {
				return (
					<TouchableOpacity
						style={{
							width: '75%',
							alignItems: 'center',
							justifyContent: 'center',
							backgroundColor: 'rgba(11, 11, 11, 0.75)',
							borderRadius: 10,
							height: '45%'
						}}
						onPress={() => this.props.navigation.navigate('New')}
					>
						<Text
							style={{
								color: 'white',
								fontSize: 17,
								fontFamily: 'AmericanTypewriter',
								letterSpacing: 2
							}}
						>
							Create{'  '}
							<Icon size={width * 0.04} color="white" name="plus-square" />
						</Text>
					</TouchableOpacity>
				);
			}
			return null;
		};
		return this.props.aliens ? (
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
				<View style={{ flex: 1, width: '100%' }}>
					<SwipingList
						aliens={this.props.aliens}
						onCardClick={this.onCardClick}
					/>
					<View
						style={{
							alignItems: 'center',
							borderTopColor: 'white',
							borderTopWidth: height * 0.007,
							height: '15%',
							width: '100%',
							marginBottom: '5%'
						}}
					>
						<View
							style={{
								backgroundColor: 'black',
								opacity: 0.7,
								position: 'absolute',
								height: '100%',
								width: '100%'
							}}
						/>
						<Text
							style={{
								color: 'white',
								fontSize: 22,
								fontFamily: 'AmericanTypewriter',
								letterSpacing: 6,
								marginTop: '6%'
							}}
						>
							PICK YOUR ALIEN
						</Text>
					</View>
					<View
						style={{
							alignItems: 'center',
							justifyContent: 'space-between',
							height: '15%',
							width: '100%'
						}}
					>
						<CreatAlien />

						<TouchableOpacity
							style={{
								width: '75%',
								alignItems: 'center',
								justifyContent: 'center',
								backgroundColor: 'rgba(11, 11, 11, 0.75)',
								borderRadius: 10,
								height: '45%'
							}}
							onPress={this.handleOnClick}
						>
							<Text
								style={{
									color: 'white',
									fontSize: 17,
									fontFamily: 'AmericanTypewriter',
									letterSpacing: 2
								}}
							>
								View All
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ImageBackground>
		) : (
			<LoadingScreen />
		);
	}
}
const mapStateToProps = state => {
	return { ...state.aliens, ...state.users };
};
const mapDispatchToProps = dispatch => {
	return { loadAliens: res => dispatch(AliensActions.loadAliens(res)) };
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MainScreen);
