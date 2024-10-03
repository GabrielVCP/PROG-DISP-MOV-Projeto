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
  label: {
    fontSize: 16,
    color: '#A359D4',
    marginBottom: 8,
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
    marginVertical: 5,
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  radioButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#A359D4',
    borderRadius: 20,
  },
  radioLabel: {
    color: '#A359D4',
  },
  radioSelected: {
    color: '#FFFFFF',
    backgroundColor: '#A359D4',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
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
