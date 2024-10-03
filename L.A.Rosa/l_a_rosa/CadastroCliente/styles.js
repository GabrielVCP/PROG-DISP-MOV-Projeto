import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#A359D4',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  inputGroup: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#A359D4',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    color: '#A359D4',
  },
  button: {
    backgroundColor: '#A359D4',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
