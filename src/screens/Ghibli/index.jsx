import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import styles from './styles';
import Title from '../../components/Title';
import MyButton from '../../components/Button';

export default function Ghibli() {
  const [movieName, setMovieName] = useState("");
  const [protagonist, setProtagonist] = useState("");

  const cadastrar = () => {
    console.warn("Movie Name: ", movieName);
    console.warn("Protagonist: ", protagonist);
  }
  return (
    <View style={styles.container}>
      <ScrollView>
      <Title title="Welcome to the Ghibli screen" />
      
      <View style={styles.textInputContainer}>
        <Text style={styles.text}>Insert a Movie here:</Text>
        <TextInput style={styles.textInput} 
        placeholder="Movie Name:" 
        value={movieName}
        onChangeText={setMovieName}
        />
              <Text style={styles.text}>Insert a Protagonist here:</Text>
        <TextInput style={styles.textInput} 
        placeholder="Protagonist Name:" 
        value={protagonist}
        onChangeText={setProtagonist}
        />

        <TouchableOpacity style={styles.sendButton}
        onPress={cadastrar}
        >
          <Text style={styles.textButton}>Click me 😎😎😎😎</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.text}>Click on the button below to go to the Totoro screen</Text>
      <MyButton destination="Totoro" name="Totoro" />

      <Text style={styles.text}>Click on the button below to go to the Home screen</Text>
      <MyButton destination="Home" name="Home" type={"back"} />
      </ScrollView>
    </View>
  )
}
