import { useState } from 'react'; 
import { View, TextInput, TouchableOpacity, Image, ScrollView, Text } from 'react-native';
import styles from './styles';

const ImovelCard = ({ imovel, onEdit, onDelete }) => {
  return (
    <View style={styles.imovelCard}>
      <Image source={{ uri: imovel.imagem }} style={styles.imovelImage} />
      <View style={styles.imovelInfo}>
        <Text style={styles.imovelTitulo}>{imovel.titulo}</Text>
        <Text style={styles.imovelDescricao}>{imovel.descricao}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.editButton} onPress={() => onEdit(imovel.id)}>
            <Text style={styles.editButtonText}>EDITAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(imovel.id)}>
            <Text style={styles.deleteButtonText}>EXCLUIR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default function Imoveis() {
  const [searchQuery, setSearchQuery] = useState('');
  const [imoveis, setImoveis] = useState([
    {
      id: 1,
      titulo: 'Casa Espetacular',
      descricao: 'Casa com 3 dormitórios, 2 suítes, ampla sala e quintal grande.',
      imagem: 'https://www.decorfacil.com/wp-content/uploads/2017/10/20171015casas-de-praia-22.jpg',
    },
    {
      id: 2,
      titulo: 'Apartamento Moderno',
      descricao: 'Apartamento de 2 dormitórios, cozinha americana e varanda.',
      imagem: 'https://i.pinimg.com/originals/73/f2/79/73f2796d541f494f130ea4da77aacd8e.jpg',
    },
    {
      id: 3,
      titulo: 'Prédio Comercial',
      descricao: 'Prédio Comercial com elevador e 15 vagas de garagem para Aluguel.',
      imagem: 'https://i.pinimg.com/736x/b9/96/e3/b996e3a126b12d12274e7db3a61133fa.jpg',
    },
    {
      id: 4,
      titulo: 'Chácara com Lago',
      descricao: 'Chácara ampla com lago, salão de festas e campo de futebol.',
      imagem: 'https://admin.chavesnamao.com.br/wp-content/uploads/2017/02/chacaralago.jpg',
    },
    {
      id: 5,
      titulo: 'Casa em Condomínio Fechado',
      descricao: 'Casa com segurança 24h, 4 quartos, área gourmet e piscina.',
      imagem: 'https://betaimages.lopes.com.br/realestate/sml/REO115763/BAC49B4E69C0936BB8F096F5EC55A515.JPG',
    },
  ]);

  const handleEdit = (id) => {
    console.log(`Editar imóvel com ID: ${id}`);
  };

  const handleDelete = (id) => {
    const updatedImoveis = imoveis.filter((imovel) => imovel.id !== id);
    setImoveis(updatedImoveis);
    console.log(`Imóvel com ID: ${id} excluído`);
  };

  const filteredImoveis = imoveis.filter((imovel) =>
    imovel.titulo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Buscar imóveis..."
          placeholderTextColor="#FCB6E7"
        />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchIcon}>🔍</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {filteredImoveis.length > 0 ? (
          filteredImoveis.map((imovel) => (
            <ImovelCard
              key={imovel.id}
              imovel={imovel}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <Text style={styles.noImoveisText}>Nenhum imóvel encontrado</Text>
        )}
      </ScrollView>

      <TouchableOpacity style={styles.addButton} onPress={() => console.log('Adicionar imóvel')}>
        <Text style={styles.addButtonText}>➕</Text>
      </TouchableOpacity>
    </View>
  );
}
