import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import Title from '../../components/Title';
import MyButton from '../../components/Button';

export default function Home() {
  return (
    <View style={styles.container}>
      <Title title="Welcome to the Home screen" />
      <Text style={styles.text}>Click on the button below to go to the Totoro screen</Text>
      <MyButton destination="Totoro"/>
    </View>
  )
}
