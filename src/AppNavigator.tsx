// src/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductListScreen from './screens/ProductListScreen'
import ProductDetailsScreen from './screens/ProductDetailsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="ProductList">
      <Stack.Screen name="ProductList" component={ProductListScreen} options={{ title: 'Products List' }} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} options={{ title: 'Product Details' }} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;