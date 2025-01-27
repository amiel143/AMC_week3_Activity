import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const TextInputExample = () => {

  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [school, setSchool] = React.useState('');
  const [course, setCourse] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [number, setNumber] = React.useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
       
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="NAME: "
        />
        <TextInput
          style={styles.input}
          onChangeText={setAge}
          value={age}
          placeholder="AGE: "
        />
        <TextInput
          style={styles.input}
          onChangeText={setAddress}
          value={address}
          placeholder="ADDRESS: "
        />
        <TextInput
          style={styles.input}
          onChangeText={setSchool}
          value={school}
          placeholder="SCHOOL: "
        />
        <TextInput
          style={styles.input}
          onChangeText={setCourse}
          value={course}
          placeholder="COURSE: "
        />
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="EMAIL: "
        />
        <TextInput
          style={styles.input}
          onChangeText={setNumber}
          value={number}
          placeholder="NUMBER NO: "
        />
  
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputExample;
