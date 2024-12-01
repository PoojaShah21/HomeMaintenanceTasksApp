import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
  title: {fontSize: 24, fontWeight: 'bold', marginBottom: 20},
  taskItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  btnText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'purple',
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
  },
});

export default styles;
