import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import BlogScreen from './src/screens/BlogScreen';
import PortfolioScreen from './src/screens/PortfolioScreen';

type RootTabParamList = {
  Blog: undefined;
  Portfolio: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" translucent backgroundColor="transparent" />
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarStyle: { display: 'none' }
            }}
          >
            <Tab.Screen name="Blog" component={BlogScreen} />
            <Tab.Screen name="Portfolio" component={PortfolioScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}