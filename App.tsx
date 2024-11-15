import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
  focusManager,
  onlineManager,
} from '@tanstack/react-query';
import NetInfo from "@react-native-community/netinfo"
import Routes from './src/routes/index.routes';
import { AppState } from "react-native"
import type { AppStateStatus } from 'react-native';
import { useEffect, useMemo, useRef } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';

const client = new QueryClient({
  queryCache: new QueryCache(),
});

export default function App() {
  useEffect(() => {
    onlineManager.setEventListener((setOnline) => {
      return NetInfo.addEventListener((state) => {
        setOnline(!!state.isConnected);
      })
    })
  }, [NetInfo, onlineManager])

  useEffect(() => {
    const subscriber = AppState.addEventListener('change', onFocusRefetch);
    return () => subscriber.remove();
  }, [])

  const onFocusRefetch = (status: AppStateStatus) => {
    focusManager.setFocused(status == 'active');
  };
  
  return (
    //   <StatusBar style="light" />
    //   <Header />
    //   <Main />
    <QueryClientProvider client={client}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </GestureHandlerRootView>
    </QueryClientProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
