import React from 'react';
import StackNavigator from './containers/StackNavigator';
import { Provider } from 'react-redux';
import store from './reducers';

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<StackNavigator />
			</Provider>
		);
	}
}
