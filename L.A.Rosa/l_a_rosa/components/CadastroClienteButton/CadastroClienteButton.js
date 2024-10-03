import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles';

const CadastroClienteButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>Cadastro Cliente</Text>
    </TouchableOpacity>
  );
};

export default CadastroClienteButton;
