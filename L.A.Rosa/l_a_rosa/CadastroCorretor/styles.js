import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
  logo: {
    fontSize: 30,
    fontWeight: 'bolder',
    color: '#77338E',
    fontFamily: 'Italianno',
  },
  
  formContainer: {
    width: '90%', 
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#A359D4',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#A359D4',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
  },
  button: {
    backgroundColor: '#A359D4',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
