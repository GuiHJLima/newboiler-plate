import { View, Text} from 'react-native';

import styles from './styles';
import Title from '../../components/Title';
import MyButton from '../../components/Button';

export default function Ghibli() {
  return (
    <View style={styles.container}>
      <Title title="Welcome to the Ghibli screen" />
      <Text style={styles.text}>Click on the button below to go to the Totoro screen</Text>
      <MyButton destination="Totoro" name="Totoro"/>
      <Text style={styles.text}>Click on the button below to go to the Home screen</Text>
      <MyButton destination="Home" name="Home" type={"back"}/>
    </View>
  )
}
