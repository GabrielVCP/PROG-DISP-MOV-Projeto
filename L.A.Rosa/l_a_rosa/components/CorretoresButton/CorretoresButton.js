import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles';

const CorretoresButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>Corretores</Text>
    </TouchableOpacity>
  );
};

export default CorretoresButton;
