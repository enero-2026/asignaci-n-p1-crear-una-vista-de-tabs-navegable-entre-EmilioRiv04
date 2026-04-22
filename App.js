import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';
import Perfil from './Perfil';
import Configuracion from './Configuracion';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: true,
          tabBarStyle: {
            height: 60,
          },
          tabBarItemStyle: {
            flex: 1, // 👈 mismo ancho para todos
          },
          tabBarLabelStyle: {
            textAlign: 'center',
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          initialParams={{ nombre: 'Pantalla Home' }}
        />

        <Tab.Screen
          name="Perfil"
          component={Perfil}
          initialParams={{ nombre: 'Pantalla Perfil' }}
        />

        <Tab.Screen
          name="Config"
          component={Configuracion}
          initialParams={{ nombre: 'Pantalla Configuración' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}