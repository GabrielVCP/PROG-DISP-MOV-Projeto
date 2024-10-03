import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Corretores() {
  const corretores = [
    {
      id: 1,
      nome: 'Sérgio',
      sobrenome: 'Soares',
      creci: '578961-SP',
      imagem: 'https://i.imgur.com/ikavNRi.jpeg',
    },
    {
      id: 2,
      nome: 'Naomi',
      sobrenome: 'Sachimoto',
      creci: '654321-SP',
      imagem: 'https://i.imgur.com/UD3PaSy.jpeg',
    },
    {
      id: 3,
      nome: 'Enzo',
      sobrenome: 'Pereira',
      creci: '912512-SP',
      imagem: 'https://i.imgur.com/j4LnHpZ.jpeg',
    },
    {
      id: 4,
      nome: 'Danielle',
      sobrenome: 'Farias',
      creci: '341178-SP',
      imagem: 'https://i.imgur.com/3hPbFd2.jpeg',
    },
    {
      id: 5,
      nome: 'Pedro',
      sobrenome: 'Martins',
      creci: '217834-SP',
      imagem: 'https://i.imgur.com/V7cYeH8.jpeg',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.corretoresContainer}>
        {corretores.map((corretor) => (
          <View key={corretor.id} style={styles.corretorCard}>
            <Image source={{ uri: corretor.imagem }} style={styles.corretorImage} />
            <View style={styles.corretorInfo}>
              <Text style={styles.corretorNome}>{`${corretor.nome} ${corretor.sobrenome}`}</Text>
              <Text style={styles.corretorCreci}>Creci: {corretor.creci}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>➕</Text>
      </TouchableOpacity>
    </View>
  );
}
