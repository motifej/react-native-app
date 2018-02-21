import { StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ConfirmLoginScreen from '../screens/ConfirmLoginScreen';

const AppNavigator = new StackNavigator(
  {
    Login: { screen: LoginScreen },
    Home: { screen: HomeScreen },
    ConfirmLoginScreen: { screen: ConfirmLoginScreen },
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      header: null,
    },
  },
);

export default AppNavigator;
