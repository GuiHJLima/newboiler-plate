import { View, Text, Image } from 'react-native'

import styles from './styles'
import Title from '../../components/Title'
import MyButton from '../../components/Button'

export default function Totoro() {

  return (
    <View style={styles.container}>
      <Title title="Welcome to the Totoro screen" />
      <Image source={require('./../../../assets/totoro.jpg')} style={{ width: '100%', height: '50%' }} />
      <Text style={styles.text}>Click on the button below to go to the Home screen</Text>
      <MyButton destination="Home" type="back" name="Home"/>
      <Text style={styles.text}>Click on the button below to go to the Ghibli screen</Text>
      <MyButton destination="Ghibli" name="Ghibli" type="back"/>
    </View>
  )
}
