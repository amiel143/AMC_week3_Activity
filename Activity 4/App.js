import React from 'react';
import { View, Image,ScrollView, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const TextInputExample = () => {

  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [school, setSchool] = React.useState('');
  const [course, setCourse] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [value, setValue] = React.useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[
          styles.container,
          {
            backgroundColor: value,
             flexDirection: 'row',
    flexWrap: 'wrap',
          },
        ]}
      >
     <View>
        <Image
        style={{
    width: 100,
    height: 100,
    marginRight: 15, 
  }}
          source={{
            uri: 'https://tse1.explicit.bing.net/th/id/OIP.bnE0iOelmz2cqwHPAejWJwHaHa?rs=1&pid=ImgDetMain',
          }}
        
        />
      </View>
      <ScrollView style={styles.scrollContainer}>
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
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={setValue}
          value={value}
          placeholder="ABOUT ME: "
          style={styles.textInput}
        />
         </ScrollView>
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
    flexDirection: 'row',
 
  },
  container: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    borderTopWidth: 1,

  },
  textInput: {
    height: 80,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    
  },
  

});

export default TextInputExample;
