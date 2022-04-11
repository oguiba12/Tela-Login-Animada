import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../Pages/SignIn';
import Welcome from '../Pages/Welcome';


const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Welcome'
        component={Welcome}
        options={{ headerShown: false }} // remove o header 
      />
      <Stack.Screen
        name='SignIn'
        component={SignIn}
        options={{ headerShown: false }} // remove o header 
      />
    </Stack.Navigator>
  )
}





