import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

const AddTask = ({navigation}) => {
  const [taskName, setTaskName] = useState('');
  const [interval, setInterval] = useState('');

  const handleSave = async () => {
    const newTask = {id: Date.now(), name: taskName, interval};
    const storedTasks = await AsyncStorage.getItem('tasks');
    const tasks = storedTasks ? JSON.parse(storedTasks) : [];
    tasks.push(newTask);
    await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Task</Text>
      <TextInput
        style={styles.input}
        placeholder="Task Name"
        value={taskName}
        onChangeText={setTaskName}
      />
      <TextInput
        style={styles.input}
        placeholder="Reminder Interval (e.g., '1 week')"
        value={interval}
        onChangeText={setInterval}
      />
      <TouchableOpacity onPress={handleSave} style={styles.button}>
        <Text style={styles.btnText}>Save Task</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTask;
