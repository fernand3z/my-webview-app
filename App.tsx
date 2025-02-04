import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import BlogScreen from './src/screens/BlogScreen';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Blog" component={BlogScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
}