import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Home Screen</Text>
      <Text>Click on the button below to go to the Totoro screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Totoro')}>
        <Text>Go to Totoro</Text>
      </TouchableOpacity>
    </View>
  )
}
