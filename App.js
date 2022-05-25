import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import { typography } from './src/theme/typography';
import Text from './src/components/Text/Text';
import { colors } from './src/theme/colors';

export default function App() {
  const [loaded] = useFonts({
    'Antonio-Bold': require('./assets/fonts/Antonio-Bold.ttf'),
    'LeagueSpartan-Bold': require('./assets/fonts/LeagueSpartan-Bold.ttf'),
    'LeagueSpartan-Regular': require('./assets/fonts/LeagueSpartan-Regular.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text preset='h1' style={{ color: 'red' }}>Welcome</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black
  },
});
