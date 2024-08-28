import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

export default function Totoro() {

  const navigation = useNavigation()
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Totorohaus</Text>
      <Image source={require('./../../../assets/totoro.jpg')} style={{ width: '100%', height: '50%' }} />
      <Text style={styles.text}>Click on the button below to go to the Home screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.backButton}>
        <Text style={styles.text}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  )
}
