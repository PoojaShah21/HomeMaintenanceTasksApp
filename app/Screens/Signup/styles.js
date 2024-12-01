import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, justifyContent: 'center'},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {borderWidth: 1, padding: 10, marginVertical: 10, borderRadius: 5},
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
