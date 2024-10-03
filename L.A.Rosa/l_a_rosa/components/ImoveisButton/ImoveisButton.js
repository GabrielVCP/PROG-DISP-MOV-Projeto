import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles';

const ImoveisButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>Imóveis</Text>
    </TouchableOpacity>
  );
};

export default ImoveisButton;
