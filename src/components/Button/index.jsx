import { Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native';


const MyButton = ({destination, type, name}) => {

  const navigation = useNavigation()

  return (
    <>
    { type === 'back' ?
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.text}>Go to {name}</Text>
      </TouchableOpacity>
      :
      <TouchableOpacity onPress={() => navigation.navigate(destination)} style={styles.goButton}>
        <Text style={styles.text}>Go to {name}</Text>
      </TouchableOpacity>
      }
    </>
  )
}

export default MyButton