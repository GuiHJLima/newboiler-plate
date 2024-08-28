import { Text } from 'react-native'
import styles from './styles'


const TextButton = ({text}) => {


  return (
    <>
      <Text style={styles.text}>{text}</Text>
    </>
  )
}

export default TextButton