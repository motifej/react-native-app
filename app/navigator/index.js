import { StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';

const AppNavigator = new StackNavigator(
  {
    Login: { screen: HomeScreen },
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      header: null,
    },
  },
);

export default AppNavigator;
