import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Landing from '../pages/Landing';
import Name from '../pages/RegisterStep/01-Name';
import Email from '../pages/RegisterStep/02-Email';
import Password from '../pages/RegisterStep/03-Password';
import Age from '../pages/RegisterStep/05-Age';
import Cep from '../pages/RegisterStep/04-Cep';
import MaritalStatus from '../pages/RegisterStep/06-MaritalStatus';
import LookingForProduct from '../pages/ProductStep/01-LookingForProduct';
import MaxValue from '../pages/ProductStep/02-MaxValue';
import DesignStyle from '../pages/ProductStep/03-DesignStyle';
import Home from '../pages/Home';
import LookingForProductv2 from '../pages/ProductStep/01-LookingForProduct-v2';
import DetailProduct from '../pages/DetailProduct';

const { Screen, Navigator } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name='Landing' component={Landing} />

                {/* Register Step */}
                <Screen name="Name" component={Name} />
                <Screen name="Email" component={Email} />
                <Screen name="Password" component={Password} />
                <Screen name="Cep" component={Cep} />
                <Screen name="Age" component={Age} />
                <Screen name="MaritalStatus" component={MaritalStatus} />

                {/*Product Step*/}
                <Screen name="LookingForProduct" component={LookingForProduct} />
                <Screen name="LookingForProductv2" component={LookingForProductv2} />
                <Screen name="MaxValue" component={MaxValue} />
                <Screen name="DesignStyle" component={DesignStyle} />

                <Screen name='Home' component={Home} />

                <Screen name='DetailProduct' component={DetailProduct} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;