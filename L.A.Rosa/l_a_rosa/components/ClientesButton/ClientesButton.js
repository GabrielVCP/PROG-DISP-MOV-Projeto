import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles';

const ClientesButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>Clientes</Text>
    </TouchableOpacity>
  );
};

export default ClientesButton;
