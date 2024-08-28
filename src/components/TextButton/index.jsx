import { Text } from 'react-native'
import styles from './styles'


const TextButton = ({text}) => {


  return (
    <>
      <Text style={styles.textButton}>{text}</Text>
    </>
  )
}

export default TextButton