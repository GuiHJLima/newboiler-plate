import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Totoro() {

  const navigation = useNavigation()
  
  return (
    <View>
      <Text>Totorohaus</Text>
      <ImageBackground source={require('./../../../assets/totoro.jpg')} style={{ width: '100%', height: '70%' }} />
      <Text>Click on the button below to go to the Home screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  )
}
