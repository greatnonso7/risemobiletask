import React, { useEffect } from 'react';
import FlashMessage from 'react-native-flash-message';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RootNavigation } from 'navigation';
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import theme from 'theme';
import { hp } from 'constants/layout';
import { StatusBar, StyleSheet } from 'react-native';
import { isIos } from 'constants/platform';

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


const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <StatusBar />
        <RootNavigation />
        <FlashMessage
          style={styles.flashMessageContainer}
          titleStyle={styles.flashMessage}
          position={
            isIos ? 'top' : { top: StatusBar.currentHeight, left: 0, right: 0 }
          }
          floating={isIos}
        />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({
  flashMessage: {
    color: theme.colors.WHITE,
    fontFamily: theme.font.DMSansMedium,
    fontSize: hp(14),
  },
  flashMessageContainer: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: hp(10),
  },
});

export default App;
