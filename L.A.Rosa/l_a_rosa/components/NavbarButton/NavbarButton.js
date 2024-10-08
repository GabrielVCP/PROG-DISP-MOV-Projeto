import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles';

const NavbarButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default NavbarButton;
