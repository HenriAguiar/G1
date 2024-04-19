import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppProvider } from './components/provider';
import Listagem from './components/listagem';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from './components/footer';
export default function App() {
  return (
    <PaperProvider>
      <AppProvider>
        <SafeAreaView>
          <View>
            <Listagem />
            <Footer />
          </View>
        </SafeAreaView>
      </AppProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
