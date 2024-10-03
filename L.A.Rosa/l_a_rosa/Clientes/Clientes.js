import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Clientes() {
  const clientes = [
    {
      id: 1,
      nome: 'Maria Silva',
      cpf: '123.456.789-00',
      telefone: '(11) 91234-5678',
      email: 'maria.silva@example.com',
      endereco: 'Rua das Flores, 123, São Paulo - SP',
    },
    {
      id: 2,
      nome: 'João Souza',
      cpf: '987.654.321-00',
      telefone: '(21) 99876-5432',
      email: 'joao.souza@example.com',
      endereco: 'Av. Rio Branco, 456, Rio de Janeiro - RJ',
    },
    {
      id: 3,
      nome: 'Ana Costa',
      cpf: '321.654.987-00',
      telefone: '(31) 99876-5432',
      email: 'ana.costa@example.com',
      endereco: 'Rua das Acácias, 789, Belo Horizonte - MG',
    },
    {
      id: 4,
      nome: 'Paulo Almeida',
      cpf: '654.321.987-00',
      telefone: '(41) 91234-5678',
      email: 'pedro.almeida@example.com',
      endereco: 'Avenida Brasil, 159, Curitiba - PR',
    },
    {
      id: 5,
      nome: 'Laura Martins',
      cpf: '147.258.369-00',
      telefone: '(51) 99876-5432',
      email: 'laura.martins@example.com',
      endereco: 'Rua da Independência, 321, Porto Alegre - RS',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.clientesContainer}>
        {clientes.map((cliente) => (
          <View key={cliente.id} style={styles.clienteCard}>
            <Text style={styles.clienteNome}>{cliente.nome}</Text>
            <Text style={styles.clienteInfo}>CPF: {cliente.cpf}</Text>
            <Text style={styles.clienteInfo}>Telefone: {cliente.telefone}</Text>
            <Text style={styles.clienteInfo}>E-mail: {cliente.email}</Text>
            <Text style={styles.clienteInfo}>Endereço: {cliente.endereco}</Text>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>➕</Text>
      </TouchableOpacity>
    </View>
  );
}
