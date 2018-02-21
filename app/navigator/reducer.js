import AppNavigator from './index';

// const initialState = {
//   index: 0,
//   routes: [{ key: 'Init', routeName: 'Login' }],
// };

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Login'));


export default (state = initialState, action) =>
  AppNavigator.router.getStateForAction(action, state) || state;
