import React from 'react';
import decode from 'jwt-decode';
import {
	Text,
	View,
	ScrollView,
	ImageBackground,
	TextInput,
	TouchableOpacity,
	Alert,
	Image,
	AsyncStorage
} from 'react-native';
import { bindActionCreators } from 'redux';
import { CardsList, Header, ProfilePage, LoadingScreen } from '../components';
import * as AliensActions from '../actions/aliens';
import * as AliensServices from '../services/AliensService';
import { connect } from 'react-redux';

class AlienProfile extends React.Component {
	static navigationOptions = {
		header: null
	};
	state = {
		editForm: false
	};
	componentDidMount() {
		AliensServices.getAlien(this.props.navigation.getParam('alienId')).then(
			alien => {
				this.setState({ alien });
			}
		);
	}

	handleDelete = () => {
		AliensServices.deleteAlien(this.state.alien.id).then(res => {
			this.props.deleteAlien(res);
			this.props.navigation.goBack();
			Alert.alert('Alien deleted Successfully');
		});
	};
	onClickEdit = () => {
		this.setState({
			editForm: !this.state.editForm
		});
	};
	onNameChange = name => {
		this.setState({ alien: { ...this.state.alien, name } });
	};
	onDescChange = desc => {
		this.setState({ alien: { ...this.state.alien, desc } });
	};
	handleUpdate = () => {
		AliensServices.updateAlien(
			this.state.alien.id,
			this.state.alien.name,
			this.state.alien.desc
		).then(res => {
			this.props.updateAlien(res);
			Alert.alert('Alien updated Successfully');
			this.onClickEdit();
		});
	};

	render() {
		return this.state.alien ? (
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
				<ProfilePage
					alien={this.state.alien}
					user={this.props.user}
					handleDelete={this.handleDelete}
					handleUpdate={this.handleUpdate}
					onClickEdit={this.onClickEdit}
					editForm={this.state.editForm}
					onNameChange={this.onNameChange}
					onDescChange={this.onDescChange}
					NameForm={this.NameForm}
					DescForm={this.DescForm}
				/>
			</ImageBackground>
		) : (
			<LoadingScreen />
		);
	}
}
const mapStateToProps = state => {
	return { ...state.users };
};
const mapDispatchToProps = dispatch => {
	return bindActionCreators(AliensActions, dispatch);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AlienProfile);
