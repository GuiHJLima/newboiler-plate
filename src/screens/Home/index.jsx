import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Text style={styles.text}>Click on the button below to go to the Totoro screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Totoro')} style={styles.goButton}>
        <Text style={styles.text}>Go to Totoro</Text>
      </TouchableOpacity>
    </View>
  )
}
