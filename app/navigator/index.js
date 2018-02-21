import { StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';

const AppNavigator = new StackNavigator(
  {
    Login: { screen: LoginScreen },
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      header: null,
    },
  },
);

export default AppNavigator;