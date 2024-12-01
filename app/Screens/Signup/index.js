import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

const Signup = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = async () => {
    if (name && email) {
      await AsyncStorage.setItem('user', JSON.stringify({name, email}));
      navigation.navigate('TaskList');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Home Maintenance Tasks</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity onPress={handleRegister} style={styles.button}>
        <Text style={styles.btnText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;
