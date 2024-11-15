import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
  focusManager,
  onlineManager,
} from '@tanstack/react-query';
import NetInfo from "@react-native-community/netinfo"
import { AppState } from "react-native"
import type { AppStateStatus } from 'react-native';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Routes from './src/routes';
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
    <QueryClientProvider client={client}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Routes />
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}