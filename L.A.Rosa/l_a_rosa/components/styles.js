import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  navbar: {
    backgroundColor: 'rgba(252, 182, 231, 0.3)',
    borderBottomWidth: 2,
    borderBottomColor: '#77338E',
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#77338E',
    fontFamily: 'Italianno', 
    letterSpacing: 1.5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    maxWidth: 600,
  },
   button: {
    width: 100,
    height: 40,
    backgroundColor: '#FCB6E7',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 12,
    color: '#000',
  },
});

export default styles;
