import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import {useIsFocused} from '@react-navigation/native';

const TaskList = ({navigation}) => {
  const [tasks, setTasks] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchTasks = async () => {
      const storedTasks = await AsyncStorage.getItem('tasks');
      setTasks(storedTasks ? JSON.parse(storedTasks) : []);
    };
    fetchTasks();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Tasks</Text>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.taskItem}>
            <Text>{item.name}</Text>
            <Text>{item.interval}</Text>
          </View>
        )}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('AddTask')}
        style={styles.button}>
        <Text style={styles.btnText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskList;
