import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../telas/home'
import Produtores from '../telas/home/componentes/Produtor';

const Tab = createBottomTabNavigator()


export default function AppRotas() {
    return (

        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Home' component={Home} />
                <Tab.Screen name='Melhores Produtores' component={Produtores} />
            </Tab.Navigator>
        
        </NavigationContainer>

    )
}