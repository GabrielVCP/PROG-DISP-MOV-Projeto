import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';

export default function CadastroCliente() {
  const [formValues, setFormValues] = useState({
    nome: '',
    cpf: '',
    rg: '',
    telefone: '',
    nascimento: '',
  });

  const handleInputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSave = () => {
    console.log('Cliente salvo:', formValues);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro de Cliente</Text>

      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={formValues.nome}
          onChangeText={(value) => handleInputChange('nome', value)}
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="CPF"
          value={formValues.cpf}
          onChangeText={(value) => handleInputChange('cpf', value)}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="RG"
          value={formValues.rg}
          onChangeText={(value) => handleInputChange('rg', value)}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          value={formValues.telefone}
          onChangeText={(value) => handleInputChange('telefone', value)}
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="Data de Nascimento"
          value={formValues.nascimento}
          onChangeText={(value) => handleInputChange('nascimento', value)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
