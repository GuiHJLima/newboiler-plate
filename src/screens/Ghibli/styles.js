import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 20,
  },

  textInput: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 20,
  },
  sendButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  textButton:{
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
    padding: 10,
  },
  textInputContainer: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
});

export default styles;