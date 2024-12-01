import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Text, View} from 'react-native';
import styles from './styles';

const slides = [
  {
    key: '1',
    title: 'Welcome to Home Maintenance Tasks',
    text: 'Manage your home maintenance with ease.',
    backgroundColor: '#59b2ab',
  },
  {
    key: '2',
    title: 'Set Reminders',
    text: 'Never forget important maintenance tasks.',
    backgroundColor: '#febe29',
  },
  {
    key: '3',
    title: 'Customizable Tasks',
    text: 'Add your own tasks and configure reminders.',
    backgroundColor: '#22bcb5',
  },
];

const Onboarding = ({navigation}) => {
  const onDone = () => {
    navigation.replace('Signup');
  };

  return (
    <AppIntroSlider renderItem={renderItem} data={slides} onDone={onDone} />
  );
};

const renderItem = ({item}) => (
  <View style={[styles.slide, {backgroundColor: item.backgroundColor}]}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.text}>{item.text}</Text>
  </View>
);

export default Onboarding;
