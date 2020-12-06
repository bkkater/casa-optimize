import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Landing from '../pages/Landing';
import AppLoading from '../pages/AppLoading';
import RegisterStep from '../pages/RegisterStep';
import Name from '../pages/RegisterStep/01-Name';
import Email from '../pages/RegisterStep/02-Email';
import Password from '../pages/RegisterStep/03-Password';
import Age from '../pages/RegisterStep/05-Age';
import Cep from '../pages/RegisterStep/04-Cep';
import MaritalStatus from '../pages/RegisterStep/06-MaritalStatus';
import ProductStep from '../pages/ProductStep';

const { Screen, Navigator } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name='Landing' component={Landing} />
                <Screen name="AppLoading" component={AppLoading} />

                <Screen name="RegisterStep" component={RegisterStep} />
                <Screen name="Name" component={Name} />
                <Screen name="Email" component={Email} />
                <Screen name="Password" component={Password} />
                <Screen name="Cep" component={Cep} />
                <Screen name="Age" component={Age} />
                <Screen name="MaritalStatus" component={MaritalStatus} />

                <Screen name="ProductStep" component={ProductStep} />

            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;