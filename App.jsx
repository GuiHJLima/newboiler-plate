import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>tudo bão</Text>
      <Image style={styles.image} source={{uri: 'https://pm1.aminoapps.com/7756/7ab02fe074250fcb0540fb9dae7247f6dbfbb8a4r1-389-389v2_00.jpg' }} />
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
  },

  image: {
    width: 200,
    height: 200,
  }
});
