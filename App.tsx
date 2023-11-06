import {useState} from 'react';
import React from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function App() {
  const placeHolder = 'Enter your name, maybe?';
  const [text, onChangeText] = React.useState(placeHolder);
  const [clicked, setClicked] = useState(false);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.notIntense}>Enter your name, maybe?</Text> */}
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        testID="name-input"
      />
      {!clicked && (
        <Pressable
          testID="click-me-button"
          style={styles.button}
          onPress={() => setClicked(true)}>
          <Text style={styles.text}>Click me</Text>
        </Pressable>
      )}
      {clicked && (
        <Text style={styles.hi} testID="output-text">
          {text === placeHolder ? `Hi!` : `Hi, ${text}!`}
        </Text>
      )}
      <Text style={styles.intense}>WITNESS MEEEEE!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hi: {
    fontSize: 30,
    color: '#4630EB',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#4630EB',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  intense: {
    marginTop: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF0000',
  },
  notIntense: {
    color: 'black',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
