import React from 'react';
import Home from './screens/Home';
import TeamDetails from './screens/TeamDetails';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const AppNavigator = () => <Stack.Navigator
	initialRouteName='Home'>
	<Stack.Screen name='Teams'
		component={Home}/>
	<Stack.Screen name='Team Details'
		component={TeamDetails}/>
</Stack.Navigator>;

export default AppNavigator;