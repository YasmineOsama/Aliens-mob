import HomeScreen from './HomeScreen';
import MainScreen from './MainScreen';
import AliensList from './AliensList';
import AlienProfile from './AlienProfile';
import CreatAlien from './CreatAlien';
import { createStackNavigator } from 'react-navigation';

export default createStackNavigator({
	Home: { screen: HomeScreen },
	Main: { screen: MainScreen },
	List: { screen: AliensList },
	Profile: { screen: AlienProfile },
	New: { screen: CreatAlien }
});
