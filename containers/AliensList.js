import React from 'react';
import {
	Text,
	View,
	ImageBackground,
	TextInput,
	TouchableOpacity,
	Alert
} from 'react-native';
import { connect } from 'react-redux';
import { CardsList, Header, LoadingScreen } from '../components';
import { loadAliens } from '../actions/aliens';
import * as AliensServices from '../services/AliensService';

class AliensList extends React.Component {
	static navigationOptions = {
		header: null
	};
	state = {
		page: 1,
		aliens: [],
		isRefreshing: false
	};
	componentWillMount() {
		this.loadAliens();
	}
	handleRefresh = () => {
		this.setState(
			{
				page: 1,
				isRefreshing: true
			},
			() => {
				this.loadAliens();
			}
		);
	};
	handleLoadMore = () => {
		this.setState(
			{
				page: this.state.page + 1
			},
			() => {
				this.loadAliens();
			}
		);
		if (this.state.aliens.length == 0) {
			this.setState({ message: 'NoMore', page: 0 });
		}
		console.log('loading', this.state.page);
	};
	loadAliens = () => {
		AliensServices.loadAliens(this.state.page)
			.then(aliens => {
				this.setState({
					aliens,
					isRefreshing: false
				});
			})
			.catch(err => {
				console.error(err);
			});
	};
	render() {
		const onCardClick = this.props.navigation.getParam('onCardClick');
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
				<CardsList
					onCardClick={onCardClick}
					aliens={this.state.aliens}
					handleRefresh={this.handleRefresh}
					handleLoadMore={this.handleLoadMore}
					isRefreshing={this.state.isRefreshing}
				/>
				{this.state.message && <Text>{this.state.message}</Text>}
			</ImageBackground>
		) : (
			<LoadingScreen />
		);
	}
}
function mapStateToProps(state) {
	return { ...state.aliens };
}

export default connect(
	mapStateToProps,
	undefined
)(AliensList);
