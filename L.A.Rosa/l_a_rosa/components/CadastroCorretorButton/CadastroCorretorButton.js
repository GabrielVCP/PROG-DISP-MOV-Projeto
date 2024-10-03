import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles';

const CadastroCorretorButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>Cadastro Corretor</Text>
    </TouchableOpacity>
  );
};

export default CadastroCorretorButton;
