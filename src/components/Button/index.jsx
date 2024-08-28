import { Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import TextButton from '../TextButton';


const MyButton = ({destination, type, name}) => {

  const navigation = useNavigation()

  return (
    <>
    { type === 'back' ?
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <TextButton text={'Go Back to ' + name}/>
      </TouchableOpacity>
      :
      <TouchableOpacity onPress={() => navigation.navigate(destination)} style={styles.goButton}>
        <TextButton text={'Go to ' + name}/>
      </TouchableOpacity>
      }
    </>
  )
}

export default MyButton