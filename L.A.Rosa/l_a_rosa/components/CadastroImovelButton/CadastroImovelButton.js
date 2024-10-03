import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles';

const CadastroImovelButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>Cadastro Imóvel</Text>
    </TouchableOpacity>
  );
};

export default CadastroImovelButton;
