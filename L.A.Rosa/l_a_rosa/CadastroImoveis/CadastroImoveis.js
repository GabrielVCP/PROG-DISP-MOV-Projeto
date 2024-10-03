import { useState } from 'react'; 
import { View, TextInput, TouchableOpacity, ScrollView, Text } from 'react-native';
import styles from './styles';

export default function CadastroImoveis() {
  const [formValues, setFormValues] = useState({
    tipo: '',
    referencial: '',
    matricula: '',
    cep: '',
    dormitorios: '',
    suite: '',
    sala: '',
    banheiro: '',
    cozinha: '',
    quintal: '',
    valor: ''
  });

  const handleInputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSave = () => {
    console.log('Imóvel salvo:', formValues);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro de Imóveis</Text>

      <View style={styles.radioContainer}>
        {['Casa', 'Apartamento', 'Terreno', 'Comercial', 'Outro'].map((tipo) => (
          <TouchableOpacity key={tipo} style={styles.radioButton} onPress={() => handleInputChange('tipo', tipo)}>
            <Text style={formValues.tipo === tipo ? styles.radioSelected : styles.radioLabel}>{tipo}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {[
        { label: 'Referencial', name: 'referencial', keyboardType: 'default' },
        { label: 'Matrícula', name: 'matricula', keyboardType: 'default' },
        { label: 'CEP', name: 'cep', keyboardType: 'default' },
        { label: 'Dormitórios', name: 'dormitorios', keyboardType: 'number-pad' },
        { label: 'Suíte', name: 'suite', keyboardType: 'number-pad' },
        { label: 'Sala', name: 'sala', keyboardType: 'number-pad' },
        { label: 'Banheiro', name: 'banheiro', keyboardType: 'number-pad' },
        { label: 'Cozinha', name: 'cozinha', keyboardType: 'number-pad' },
        { label: 'Quintal', name: 'quintal', keyboardType: 'number-pad' },
        { label: 'Valor do Imóvel', name: 'valor', keyboardType: 'numeric' }
      ].map((input) => (
        <View key={input.name} style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            value={formValues[input.name]}
            onChangeText={(value) => handleInputChange(input.name, value)}
            keyboardType={input.keyboardType}
            placeholder={`Digite ${input.label}`}
            placeholderTextColor="#A359D4"
          />
        </View>
      ))}

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
