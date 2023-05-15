import React, { useEffect } from 'react';
import FlashMessage from 'react-native-flash-message';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RootNavigation } from 'navigation';
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const queryTime = 1000 * 60 * 60 * 24;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 1800 * 1000,
      cacheTime: queryTime,
    },
  },
});

if (__DEV__) {
  import('react-query-native-devtools').then(({ addPlugin }) => {
    addPlugin({ queryClient });
  });
}

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <RootNavigation />
        <FlashMessage position="top" />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default App;
